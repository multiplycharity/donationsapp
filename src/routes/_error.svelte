<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="container mx-auto px-4">

  <div
    class="flex flex-wrap items-center max-w-4xl mx-auto text-center
    lg:text-left my-12">
    <div
      class="w-full lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
      <h2 class="text-4xl mb-4 font-heading" data-config-id="header">
        {status}
      </h2>
      <p class="mb-6 text-gray-500" data-config-id="description">
        {error.message}
      </p>
      <a
        class="text-lg text-indigo-700 hover:underline"
        href="/"
        data-config-id="primary-action">
        Go to the homepage »
      </a>
    </div>
    <div class="w-full lg:w-1/2 px-2">
      <img src="images/error.svg" alt="" data-config-id="image" />
    </div>
  </div>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}

</div>
