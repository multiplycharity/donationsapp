<script>
  import Onboard from "bnc-onboard";
  import Web3 from "web3";
  const INFURA_KEY = "16dfd66c4a1a4a9da5724254c97c93e6";
  const BLOCKNATIVE_KEY = "ac2e16a1-29ee-4bd1-be1e-9f2ecf668c24";
  const NETWORK_ID = 4;
  const wallets = [
    { walletName: "metamask", preferred: true },
    {
      walletName: "walletConnect",
      infuraKey: INFURA_KEY,
      preferred: true
    },
    { walletName: "authereum", preferred: true, disableNotifications: true },
    { walletName: "torus", preferred: true },
    { walletName: "trust", preferred: true }
  ];
  const walletChecks = [
    { checkName: "connect" },
    { checkName: "accounts" },
    { checkName: "network" },
    { checkName: "balance", minimumBalance: "1000000" }
  ];
  const onboard = Onboard({
    dappId: BLOCKNATIVE_KEY,
    networkId: NETWORK_ID,
    subscriptions: {
      wallet: wallet => {
        console.log({ wallet });
        web3 = new Web3(wallet.provider);
      },
      address: address => console.log({ address }),
      balance: balance => console.log({ balance }),
      network: network => console.log({ network })
    },
    walletSelect: { wallets: wallets },
    walletCheck: walletChecks
  });
  const fundWithCrypto = async () => {
    console.log("Funding with crypto..");
    await onboard.walletSelect();
    await onboard.walletCheck();
  };
</script>

<section
  class="text-center bg-cover h-full"
  style="background-image: url('images/frame_47.jpg'">

  <div class="relative flex items-center py-12 md:py-24 lg:py-32">
    <div class="absolute bg-black opacity-50 inset-0" />
    <div class="z-10 max-w-2xl mx-auto">
      <h2
        class="text-3xl md:text-5xl mb-2 leading-tight font-heading text-white">
        The Lagos School
      </h2>
      <p class="px-4 mb-2 text-gray-400 font-light eading-relaxed">
        Fund the next year of teaching kids the basics of adult life
      </p>
    </div>
  </div>

</section>

<div class="container mx-auto px-4">

  <section class="p-8 lg:p-16">
    <div class="flex flex-wrap -mx-4">
      <div class="md:w-1/4 p-4 mb-4 md:mb-0">

        <h3 class="text-xl my-2 font-heading">33 kids financed</h3>
        <p class="text-gray-500 leading-relaxed">
          Forget about paper jams with our increased stability product.
        </p>
      </div>
      <div class="md:w-1/4 p-4 mb-4 md:mb-0">

        <h3 class="text-xl my-2 font-heading">
          12 teachers yearly salary paid
        </h3>
        <p class="text-gray-500 leading-relaxed">
          Multi-functional paper for various office needs.
        </p>
      </div>
      <div class="md:w-1/4 p-4 mb-4 md:mb-0">

        <h3 class="text-xl my-2 font-heading">2 repaired buildings</h3>
        <p class="text-gray-500 leading-relaxed">
          The best combination of quality and economy comes with our paper.
        </p>
      </div>
      <div class="md:w-1/4 p-4 mb-4 md:mb-0">

        <h3 class="text-xl my-2 font-heading">23 happy parents</h3>
        <p class="text-gray-500 leading-relaxed">
          The offer includes paper in wide range of density and sizes.
        </p>
      </div>
    </div>
  </section>

  <div class="max-w-3xl mx-auto text-center">
    <button
      class="h-full w-5/12 inline-block p-4 mx-2 text-white bg-teal-500
      hover:bg-teal-600 rounded shadow-xl hover:shadow-2xl"
      on:click={fundWithCrypto}>
      Fund with crypto
    </button>
    <button
      class="h-full w-5/12 inline-block p-4 mx-2 text-white bg-purple-500
      hover:bg-purple-600 rounded shadow-xl hover:shadow-2xl">
      Fund with card
    </button>
  </div>

  <article class="mb-12 p-4">

    <h1 class="my-12 text-4xl text-center font-heading font-semibold">
      About the School
    </h1>

    <div class="max-w-3xl mx-auto">
      <p class="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>

    </div>
  </article>

</div>
