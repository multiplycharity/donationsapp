<script>
  import { fade } from "svelte/transition";
</script>

<section transition:fade class="py-12 px-4">
  <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">

    <div class="lg:w-1/2 px-2">
      <img src="images/Frame_47.jpg" alt="">
    </div>

    <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">

      <span class="text-sm font-semibold">MAKE A DIFFERENCE - PROVABLY</span>
      <h2 class="text-5xl mt-4 mb-6 leading-tight font-heading">Donations with leverage</h2>
      <p class="mb-8 text-gray-500 leading-relaxed" data-config-id="description">
        Send money directly to people living in extreme poverty, and track your impact on local economic growth.
      </p>

      <form class="w-full max-w-lg mx-auto lg:mx-0">
        <div class="flex flex-wrap mb-6 md:mb-0">
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
          Follow our community updates
        </p>
      </form>

    </div>

  </div>
</section>

<section class="py-8 px-4"><div class="flex flex-wrap -mx-4 -mb-6">
    <div class="lg:w-1/3 px-4 mb-6"><img src="/icons/shield.svg" alt=""><h3 class="text-xl my-2 font-heading">8490 people trading</h3>
      <!--<p class="text-gray-500 leading-relaxed">text here.</p>-->
    </div>
    <div class="lg:w-1/3 px-4 mb-6"><img src="/icons/cloud-tools.svg" alt=""><h3 class="text-xl my-2 font-heading">$3254 donated</h3>
      <!--<p class="text-gray-500 leading-relaxed">text here.</p>-->
    </div>
    <div class="lg:w-1/3 px-4 mb-6"><img src="/icons/cart.svg" alt=""><h3 class="text-xl my-2 font-heading">$89769 verified impact</h3>
      <!--<p class="text-gray-500 leading-relaxed">text here.</p>-->
    </div>
  </div>
</section>
