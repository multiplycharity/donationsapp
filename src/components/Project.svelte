<script>
  export let project;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<section
  class="text-center bg-cover h-full"
  style="background-image: url({project.imageUrl})">

  <div class="relative flex items-center py-12 md:py-24 lg:py-32">
    <div class="absolute bg-black opacity-50 inset-0" />
    <div class="z-10 max-w-2xl mx-auto">
      <h2
        class="text-3xl md:text-5xl mb-2 leading-tight font-heading text-white">
        {project.name}
      </h2>
      <p class="px-4 mb-2 text-gray-400 leading-relaxed">
        {project.shortDescription}
      </p>

    <!--  <div class="max-w-3xl mx-auto text-gray-400 mt-16 text-center">
        <p class="leading-relaxed">Donate to this campaign with ETH or Ethereum tokens: <code class="select-all">{project.donationAddress}</code></p>
      </div>-->

      <div class="max-w-3xl mx-auto my-8 text-center">
        <button
          class="h-full w-5/12 inline-block p-4 mx-2 text-white bg-blue-500
          hover:bg-blue-600 rounded shadow-xl hover:shadow-2xl
          focus:outline-none"
          on:click={() => dispatch('fundwithcrypto')}>
          Fund with crypto
        </button>
        <button
          class="h-full w-5/12 inline-block p-4 mx-2 text-white bg-green-500
          hover:bg-green-600 rounded shadow-xl hover:shadow-2xl
          focus:outline-none"
          on:click={() => dispatch('fundwithcard')}>
          Fund with card
        </button>
      </div>
    </div>
  </div>

</section>

<div class="container mx-auto px-4">

  <section class="p-8 lg:p-16">
    <h1 class="my-6 text-4xl text-center font-heading font-semibold">
      This campaign's impact
    </h1>

    <div class="flex flex-wrap text-center justify-center z-10 max-w-2xl mx-auto ">
      <p class="leading-relaxed mx-auto mb-4">
        See how your contributions improved our community members lives over the last 30 days.
      </p>

      <!--<div class="flex flex-wrap -mx-4 text-center justify-center">
        {#each project.stats as stat}
          <div class="md:w-1/4 p-4 mb-4">
            <h3 class="text-xl my-2 font-heading">{stat.num}</h3>
            <p class="text-gray-500 leading-relaxed">{stat.text}</p>
          </div>
        {/each}
      </div>-->

      <div class="border border-grey-100">

        <a class="underline " href="http://cic-dashboard-frontend-webpage.s3-website.eu-central-1.amazonaws.com/" target="_blank">
          <img class="pb-8 mx-auto " src={project.statisticsImage} alt="">
        </a>
        <div class="px-4 py-2 mb-4">
          Dive into more detailed data at the <a class="underline " href="http://cic-dashboard-frontend-webpage.s3-website.eu-central-1.amazonaws.com/" target="_blank">blockchain insights dashboard</a>.
        </div>
      </div>

    </div>

  </section>

  <article class="mb-12 p-4">

    <h1 class="mb-12 text-4xl text-center font-heading font-semibold">
      About the project
    </h1>

    <div class="max-w-3xl mx-auto">
      <p class="pb-8">{project.description}</p>

      <img class="w-1/2 pb-8 mx-auto" src={project.infoImage1} alt="">

      <p class="pb-8">{project.infoText1}</p>

      <img class="w-1/2 pb-8 mx-auto" src={project.infoImage2} alt="">

      <p class="pb-8">{project.infoText2}</p>
    </div>

  </article>

</div>
