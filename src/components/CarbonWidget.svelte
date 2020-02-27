<script>
  let carbonWidget = null;

  function onCarbonWidgetLoaded() {
    carbonWidget = window.CarbonWidget.default;
  }
</script>

<svelte:head>
  <script
    type="text/javascript"
    src="https://d2xxy1rwbjzckp.cloudfront.net/carbonFiber.js.min.gz"
    on:load={onCarbonWidgetLoaded}>

  </script>
</svelte:head>

{#if carbonWidget}
  <div
    class="carbonfiber fixed w-full h-full top-0 left-0 flex items-center
    justify-center"
    id="carbonfiber" />
  {@html carbonWidget.carbonFiber.render({
    clientName: 'Carbon Fiber',
    environment: 'sandbox',
    publicKey: 'pk_test_cHktU3vB5XCX0S04B82v34Of',
    tokens: 'eth',
    amount: '10',
    targetContainerId: 'carbonfiber',
    showCarbonLogo: false,
    homeScreenMessage: ' '
  })}
{/if}
