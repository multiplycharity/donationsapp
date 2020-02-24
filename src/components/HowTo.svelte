<script>
  import { fade } from "svelte/transition";
</script>

<section transition:fade class="py-12 px-4">
  <h2 class="text-4xl mb-2 text-center leading-tight font-heading">Donate and track the impact</h2>
  <p class="text-center mb-12 text-gray-500">Converting your donations into community currencies, enables us to boost and protect the local economy.</p>
  <div>
    <div class="flex flex-wrap items-center -mx-8">
      <div class="md:w-1/2 px-8 mb-8"><img class="w-1/4 mx-auto" src="/icons/sustainability/give.svg" alt=""></div>
      <div class="md:w-1/2 px-8 mb-8">
      <!--<span class="text-6xl">01</span>-->
      <span class="text-sm font-semibold">01</span>
        <h3 class="text-3xl mb-3 font-heading">Donating to a Campaign</h3>
        <p class="text-gray-500 mb-3 leading-relaxed">You choose a project to donate to.</p>
        <button
          class="inline-block py-4 px-8 leading-none text-white
          bg-indigo-500 hover:bg-indigo-600 rounded md:rounded-l-none">
          Donate now
        </button>
      </div>
    </div>
    <div class="flex flex-wrap items-center -mx-8">
      <div class="md:w-1/2 px-8 mb-8"><img class="w-1/4 mx-auto" src="/icons/sustainability/return.svg" alt=""></div>
      <div class="md:w-1/2 px-8">
      <span class="text-sm font-semibold">02</span>
      <!--<div class="md:w-1/2 px-8 md:text-right"><span class="text-6xl">02</span>-->
        <h3 class="text-3xl mb-3 font-heading">Converting the Currencies</h3>
        <p class="text-gray-500 leading-relaxed">We add the donation to the currency reserve, and issue an equivalent worth of community currency to the local project. we convert your donation in national currency (read EUROS) into local currency. which can only be spent locally.
</p>
      </div>
    </div>
    <div class="flex flex-wrap items-center -mx-8">
      <div class="md:w-1/2 px-8 mb-8 order-none"><img class="w-1/4 mx-auto" src="/icons/sustainability/earth-pin.svg" alt=""></div>
      <div class="md:w-1/2 px-8">
      <span class="text-sm font-semibold">03</span>
        <h3 class="text-3xl mb-3 font-heading">Tracking the Impact</h3>
        <p class="text-gray-500 leading-relaxed">Check the impact of your donation in our dashboard. Stay in contact with your donees.</p>
      </div>
    </div>
  </div>
</section>
