<script>
  import Project from "../../components/Project.svelte";
  import Modal from "../../components/Modal.svelte";
  import CarbonWidget from "../../components/CarbonWidget.svelte";
  import { ethers } from "ethers";
  import { writable } from "svelte/store";
  import { initOnboard, initNotify } from "../../services";
  import getSigner from "../../services/signer.js";
  import confetti from "../../services/confetti.js";
  import axios from "axios";

  let amount = 0;
  let touched = false;

  $: isValidAmount = !isNaN(amount);

  // let address = writable(null);
  import address from "../../stores/address.js";

  let wallet = writable(null);
  let signer = writable(null);
  let balance = writable(null);
  let network = writable(null);
  let provider = writable(null);
  let onboard = writable(null);
  let notify = writable(null);

  let tokenContract;
  let tokenSymbol;
  let notificationObject;
  let chosenType = "";

  $: {
    console.log({ chosenType });
  }

  onboard.set(
    initOnboard({
      wallet: async w => {
        provider.set(new ethers.providers.Web3Provider(w.provider));
        wallet.set(w);
        window.localStorage.setItem("selectedWallet", w.name);
        signer.set(getSigner($provider));

        tokenContract = new ethers.Contract(
          "0xFab46E002BbF0b4509813474841E0716E6730136",
          [
            "function transfer(address recipient, uint256 amount) public returns (bool)",
            "function symbol() public view returns (string memory)"
          ],
          $signer
        );

        tokenSymbol = await tokenContract.symbol();
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

  const fundWithCrypto = async () => {
    console.log("Funding with crypto..");

    if ($wallet && $wallet.name && $onboard) {
      await $onboard.walletSelect($wallet.name);
    } else await $onboard.walletSelect();

    const isWalletCheckPassed = await $onboard.walletCheck();
    if (isWalletCheckPassed) chosenType = "crypto";
  };

  const fundWithCard = async () => {
    console.log("Funding with card...");
    chosenType = "card";
    window.open("/buy-crypto", "_blank");
  };

  const handlePaymentWithCrypto = async () => {
    const to = "0x6748e86bC4943ce1E6134F78cb4c9557a71AB4f2";

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
        console.log;
      });
      emitter.on("txSpeedUp", console.log);
      emitter.on("txCancel", console.log);
      emitter.on("txFailed", console.log);
    } catch (err) {
      update({
        eventCode: "txFailed",
        type: "error",
        message: err.message
      });
      console.error(err);
      hideModal();
    }

    hideModal();
  };

  const hideModal = () => {
    chosenType = "";
    amount = 0;
  };
</script>

<Project on:fundwithcrypto={fundWithCrypto} on:fundwithcard={fundWithCard} />

<Modal
  isActive={chosenType === 'crypto'}
  title={`Enter amount of ${tokenSymbol} to donate`}
  on:hidemodal={hideModal}>

  <form class="w-full max-w-lg mx-auto lg:mx-0 mb-2">
    <div class="flex flex-wrap">
      <div class="w-full md:w-2/3">

        <input
          class="appearance-none block w-full py-3 px-4 leading-snug
          text-gray-700 bg-gray-200 focus:bg-white border border-gray-200
          focus:border-gray-500 rounded rounded-b-none md:rounded
          md:rounded-r-none focus:outline-none"
          type="number"
          placeholder={tokenSymbol}
          bind:value={amount}
          on:blur={() => (touched = true)}
          on:focus={() => {
            amount = null;
          }} />
        <p
          class="text-red-500 text-xs italic mt-1"
          class:hidden={isValidAmount || !touched}>
          Please enter a positive number
        </p>

      </div>

      <div class="w-full md:w-1/3">
        <button
          class="inline-block w-full py-4 px-8 leading-none text-white
          bg-indigo-500 hover:bg-indigo-600 rounded rounded-t-none md:rounded
          md:rounded-l-none"
          on:click|preventDefault={handlePaymentWithCrypto}>
          Send
        </button>
      </div>
    </div>

  </form>
</Modal>
