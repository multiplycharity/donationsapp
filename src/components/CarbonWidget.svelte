<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let isActive = false;
  let carbonWidget = null;

  function onCarbonWidgetLoaded() {
    carbonWidget = window.CarbonWidget.default;
  }

  function handleKeyDown(e) {
    if (e.key === "Escape" && isActive) {
      hideModal();
    }
  }

  function hideModal() {
    dispatch("hidemodal");
  }
</script>

<style>
  .modal {
    transition: opacity 0.25s ease;
  }

  section.modal-active {
    overflow-x: hidden;
    overflow-y: visible !important;
  }
</style>

<svelte:head>
  <script
    type="text/javascript"
    src="https://d2xxy1rwbjzckp.cloudfront.net/carbonFiber.js.min.gz"
    on:load={onCarbonWidgetLoaded}>

  </script>
</svelte:head>

<svelte:window on:keydown={handleKeyDown} }} />

<section class="modal-active">

  <div
    class="modal fixed w-full h-full top-0 left-0 flex items-center
    justify-center z-50"
    class:opacity-0={!isActive}
    class:pointer-events-none={!isActive}>

    <div class="absolute w-full h-full bg-gray-100" on:click={hideModal} />

    <div class="text-left">

      <div
        class="absolute flex justify-center items-center m-4 px-4 py-5 bg-white
        z-40 rounded-full">
        <!-- logo-->

        <div class="absolute cursor-pointer" on:click={hideModal}>
          <svg
            class="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>

        </div>

      </div>

      <div
        class="carbonfiber rounded-lg overflow-hidden shadow-2xl"
        id="carbonfiber" />
    </div>

  </div>

</section>

{#if carbonWidget}
  {@html carbonWidget.carbonFiber.render({
    clientName: 'Carbon Fiber',
    environment: 'sandbox',
    publicKey: 'pk_test_s7brB3hVeq03308xp14LT33I',
    tokens: 'eth',
    amount: '12',
    targetContainerId: 'carbonfiber',
    showCarbonLogo: false,
    homeScreenMessage: ' '
  })}
{/if}
