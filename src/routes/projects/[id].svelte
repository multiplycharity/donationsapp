<script context="module">
  export async function preload({ params }) {
    return { id: params.id };
  }
</script>

<script>
  import Project from "../../components/Project.svelte";
  import Modal from "../../components/Modal.svelte";
  import { ethers } from "ethers";
  import { writable } from "svelte/store";
  import { initOnboard, initNotify } from "../../services";
  import getSigner from "../../services/signer.js";
  import confetti from "../../services/confetti.js";
  import axios from "axios";
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  const TOKEN_CONTRACT_ADDRESS = "0x48b0c1d90c3058ab032c44ec52d98633587ee711"; //MOON

  //"0x6B175474E89094C44Da98b954EedeAC495271d0F"; //DAI

  export let id;

  import { projects } from "../../stores/communities.js";

  const project = $projects.find(p => p.id === id);

  let donationReceiverAddress =
    project.donationAddress || "0x9b5FEeE3B220eEdd3f678efa115d9a4D91D5cf0A";

  let amount = 20;
  let touched = { amount: false, email: false };
  let email = "";

  $: isValidAmount =
    chosenType === "card" ? !isNaN(amount) && amount >= 20 : !isNaN(amount);

  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  $: isValidEmail = validateEmail($emailStore) || validateEmail(email);

  $: isValidForm = isValidAmount && isValidEmail;

  import address from "../../stores/address.js";

  let wallet = writable(null);
  let signer = writable(null);
  let balance = writable(null);
  let network = writable(null);
  let provider = writable(null);
  let onboard = writable(null);
  let notify = writable(null);
  let emailStore = writable("");

  let previouslyChosenEmail = "";

  let tokenContract = null;
  let tokenSymbol = "";
  let notificationObject = null;
  let chosenType = "";

  if (typeof window !== "undefined") {
    previouslyChosenEmail = window.localStorage.getItem("email");
    if (previouslyChosenEmail) emailStore.set(previouslyChosenEmail);
  }

  onMount(async () => {
    onboard.set(
      initOnboard({
        wallet: async w => {
          provider.set(new ethers.providers.Web3Provider(w.provider));
          wallet.set(w);
          if (typeof window !== "undefined") {
            window.localStorage.setItem("selectedWallet", $wallet.name);
            console.log("Persisting selected wallet to local storage");
          }
          signer.set(getSigner($provider));

          tokenContract = new ethers.Contract(
            TOKEN_CONTRACT_ADDRESS,
            [
              "function transfer(address recipient, uint256 amount) public returns (bool)",
              "function symbol() public view returns (string memory)"
            ],
            $signer
          );

          tokenSymbol = await tokenContract.symbol();
          console.log("tokenSymbol: ", tokenSymbol);
        },
        address: a => {
          address.set(a);
          console.log({ address: a });
        },
        balance: b => {
          balance.set(b);
          console.log({ balance: b });
        },
        network: n => {
          network.set(n);
          console.log({ network: n });
        }
      })
    );

    notify.set(initNotify());
  });

  const fundWithCrypto = async () => {
    console.log("Funding with crypto..");
    if (typeof window !== "undefined") {
      let previouslySelectedWallet = window.localStorage.getItem(
        "selectedWallet"
      );

      if (previouslySelectedWallet && $onboard) {
        await $onboard.walletSelect(previouslySelectedWallet);
      } else await $onboard.walletSelect();
    }

    let isWalletCheckPassed = await $onboard.walletCheck();
    if (isWalletCheckPassed) chosenType = "crypto";
  };

  const fundWithCard = async () => {
    console.log("Funding with card...");
    chosenType = "card";
  };

  async function setEmail(emailAddr) {
    emailAddr = emailAddr.trim();

    fetch(`api/add-user/?email=${emailAddr}`)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          if (!previouslyChosenEmail && !$emailStore) {
            window.localStorage.setItem("email", emailAddr);
            emailStore.set(emailAddr);
          }
          console.log(`Subscribed user ${emailAddr} to mailchimp`);
        } else if (!res.success && res.error) console.error(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  const handlePaymentWithCard = async () => {
    console.log("Handling payment with card...");

    await setEmail(email);
    let redirectURL = window.location.href;

    if (redirectURL.includes("?transactionId"))
      redirectURL = redirectURL.substring(
        0,
        redirectURL.indexOf("?transactionId")
      );

    await goto(
      `https://buy-staging.moonpay.io/?apiKey=pk_test_M98jboYNkUu7vni3bm1cSgHSYmc6&currencyCode=DAI&baseCurrencyCode=USD&walletAddress=${donationReceiverAddress}&email=${$emailStore}&externalCustomerId=${$emailStore}&baseCurrencyAmount=${amount}&redirectURL=${redirectURL}`
    );

    // await goto(`${url}&redirectURL=${redirectURL}`);
  };

  const handlePaymentWithCrypto = async () => {
    const to = donationReceiverAddress;

    let tx;
    console.log(`Sending ${amount} ${tokenSymbol} to ${to}`);

    notificationObject = {
      eventCode: "sendTx",
      type: "pending",
      message: `Trying to send ${amount} ${tokenSymbol} to
      ${(to || "").slice(0, 9)}...${(to || "").slice(-8)}`,
      autoDismiss: 4000
    };

    const { update, dismiss } = $notify.notification(notificationObject);

    try {
      tx = await tokenContract.transfer(
        to,
        ethers.utils.parseUnits(amount.toString())
      );

      console.log(`Tx hash: ${tx.hash}`);

      const { emitter } = $notify.hash(tx.hash);

      emitter.on("txSent", console.log);
      emitter.on("txPool", console.log);
      emitter.on("txConfirmed", () => {
        confetti();
      });
      emitter.on("txSpeedUp", console.log);
      emitter.on("txCancel", console.log);
      emitter.on("txFailed", console.log);

      await setEmail(email);
      hideModal();
    } catch (err) {
      update({
        eventCode: "txFailed",
        type: "error",
        message: err.message
      });
      console.error(err);
      hideModal();
    }
  };

  const hideModal = () => {
    chosenType = "";
    amount = 20;
    email = "";
    touched.amount = false;
    touched.email = false;
  };
</script>

<Project
  on:fundwithcrypto={fundWithCrypto}
  on:fundwithcard={fundWithCard}
  {project} />

<Modal
  isActive={chosenType === 'crypto'}
  title={`Donate in crypto`}
  on:hidemodal={hideModal}>

  <form
    action="/signup"
    method="POST"
    class="w-full max-w-lg mx-auto lg:mx-0 mb-2">
    <div class="flex flex-wrap">
      <div class="w-full">
        <p class="font-semibold text-sm my-2">{`${tokenSymbol} amount`}</p>
        <input
          class="appearance-none block w-full py-3 px-4 leading-snug
          text-gray-700 bg-gray-100 focus:bg-white border border-gray-200
          focus:border-gray-500 rounded focus:outline-none"
          type="number"
          placeholder="Amount"
          bind:value={amount}
          on:blur={() => (touched.amount = true)} />
        <p
          class="text-red-500 text-xs italic mt-1"
          class:hidden={isValidAmount || !touched.amount}>
          Please enter a positive number
        </p>

        {#if !window.localStorage.getItem('email') && !$emailStore}
          <p class="font-semibold text-sm mb-2 mt-4">Email</p>
          <input
            class="appearance-none block w-full py-3 px-4 leading-snug
            text-gray-700 bg-gray-100 focus:bg-white border border-gray-200
            focus:border-gray-500 rounded focus:outline-none"
            type="email"
            name="email"
            placeholder="Email"
            bind:value={email}
            on:blur={() => (touched.email = true)} />
          <p
            class="text-red-500 text-xs italic mt-1"
            class:hidden={isValidEmail || !touched.email}>
            Please enter a valid email
          </p>
        {/if}

      </div>

      <div class="w-full">
        <button
          class="inline-block w-full py-4 px-8 leading-none text-white
          bg-blue-500 hover:bg-blue-600 rounded mt-48"
          class:opacity-50={!isValidForm}
          class:cursor-not-allowed={!isValidForm}
          on:click|preventDefault={handlePaymentWithCrypto}>
          Send
        </button>
      </div>
    </div>

  </form>
</Modal>

<Modal
  isActive={chosenType === 'card'}
  title={`Donate in fiat`}
  on:hidemodal={hideModal}>

  <form class="w-full max-w-lg mx-auto lg:mx-0 mb-2">
    <div class="flex flex-wrap">
      <div class="w-full">
        <p class="font-semibold text-sm my-2">USD amount</p>
        <input
          class="appearance-none block w-full py-3 px-4 leading-snug
          text-gray-700 bg-gray-100 focus:bg-white border border-gray-200
          focus:border-gray-500 rounded focus:outline-none"
          type="number"
          placeholder="20"
          bind:value={amount}
          on:blur={() => (touched.amount = true)} />
        <p
          class="text-red-500 text-xs italic mt-1"
          class:hidden={isValidAmount || !touched.amount}>
          The minimum transaction amount is $20.00.
        </p>

        {#if !window.localStorage.getItem('email') && !$emailStore}
          <p class="font-semibold text-sm mb-2 mt-4">Email</p>
          <input
            class="appearance-none block w-full py-3 px-4 leading-snug
            text-gray-700 bg-gray-100 focus:bg-white border border-gray-200
            focus:border-gray-500 rounded focus:outline-none"
            type="email"
            placeholder="Email"
            bind:value={email}
            on:blur={() => (touched.email = true)} />
          <p
            class="text-red-500 text-xs italic mt-1"
            class:hidden={isValidEmail || !touched.email}>
            Please enter a valid email
          </p>
        {/if}

      </div>

      <div class="w-full">
        <button
          class="inline-block w-full py-4 px-8 leading-none text-white
          bg-blue-500 hover:bg-blue-600 rounded mt-48 disabled"
          class:opacity-50={!isValidForm}
          class:cursor-not-allowed={!isValidForm}
          disabled={!isValidForm}
          on:click|preventDefault={handlePaymentWithCard}>
          Send
        </button>
      </div>
    </div>

  </form>
</Modal>

<!-- window.history.back(); -->
