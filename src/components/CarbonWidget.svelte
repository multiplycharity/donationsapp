<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let isActive = true;
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
    // console.log("close");
    // window.open("", "_self", "");
    // window.close();
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

<svelte:window on:keydown={handleKeyDown} />

<section class="modal-active">

  <div
    class="modal fixed w-full h-full top-0 left-0 flex items-center
    justify-center z-50"
    class:opacity-0={!isActive}
    class:pointer-events-none={!isActive}>

    <div class="absolute w-full h-full bg-gray-100" on:click={hideModal} />

    <div
      class="carbonfiber rounded-lg overflow-hidden shadow-2xl"
      id="carbonfiber" />
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
