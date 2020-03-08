<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
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

        <h3 class="text-xl my-2 font-heading">12</h3>
        <p class="text-gray-500 leading-relaxed">
          classes financed
        </p>
      </div>
      <div class="md:w-1/4 p-4 mb-4 md:mb-0">

        <h3 class="text-xl my-2 font-heading">
          4
        </h3>
        <p class="text-gray-500 leading-relaxed">
          teachers yearly salary paid
        </p>
      </div>
      <div class="md:w-1/4 p-4 mb-4 md:mb-0">

        <h3 class="text-xl my-2 font-heading">2</h3>
        <p class="text-gray-500 leading-relaxed">
          building repaired
        </p>
      </div>
      <div class="md:w-1/4 p-4 mb-4 md:mb-0">

        <h3 class="text-xl my-2 font-heading">50</h3>
        <p class="text-gray-500 leading-relaxed">
          new sets of textbooks
        </p>
      </div>
    </div>
  </section>

  <div class="max-w-3xl mx-auto text-center">
    <button
      class="h-full w-5/12 inline-block p-4 mx-2 text-white bg-blue-500
      hover:bg-blue-600 rounded shadow-xl hover:shadow-2xl focus:outline-none"
      on:click={() => dispatch('fundwithcrypto')}>
      Fund with crypto
    </button>
    <button
      class="h-full w-5/12 inline-block p-4 mx-2 text-white bg-green-500
      hover:bg-green-600 rounded shadow-xl hover:shadow-2xl focus:outline-none"
      on:click={() => dispatch('fundwithcard')}>
      Fund with card
    </button>
  </div>

  <article class="mb-12 p-4">

    <h1 class="my-12 text-4xl text-center font-heading font-semibold">
      About the School
    </h1>

    <div class="max-w-3xl mx-auto">
      <p class="">
        Support the local education in this village. Your donation will go toward the physical safety of the teachers, lab and classrooms, operating expense, books, and supplies.
        <br />
        In this setup, we want to prove the effectiveness of a universal basic income for members of the Sarafu community. Each day, we give out a total of 1000 tokens and measure impact of the additional liquidity in the market.
      </p>

    </div>
  </article>

</div>
