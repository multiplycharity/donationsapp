<script>
  import { fade } from "svelte/transition";
</script>

<section transition:fade class="py-12 px-4">
  <div class="w-full max-w-2xl mx-auto text-center">

    <h2 class="text-5xl mt-4 mb-8 leading-tight font-heading">
      Donations with leverage
    </h2>

    <p class="mb-8 text-gray-500 leading-relaxed" data-config-id="description">
      Donate, grant, invest in social projects and communities & track what is
      achieved with your money
    </p>
    <form class="w-full max-w-xl mx-auto">
      <div class="flex flex-wrap mb-4">
        <div class="w-full md:w-2/3">
          <input
            class="appearance-none block w-full py-3 px-4 mb-4 md:mb-0
            leading-snug text-gray-700 bg-gray-200 focus:bg-white border
            border-gray-200 focus:border-gray-500 rounded md:rounded-r-none
            focus:outline-none"
            type="text"
            placeholder="amir@abundance.rocks" />
        </div>
        <div class="w-full md:w-1/3">
          <button
            class="inline-block w-full py-4 px-8 leading-none text-white
            bg-indigo-500 hover:bg-indigo-600 rounded md:rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
      <p class="text-sm text-gray-500 leading-relaxed">
        Subscribe to our newsletter to follow community updates
      </p>
    </form>

  </div>
</section>
