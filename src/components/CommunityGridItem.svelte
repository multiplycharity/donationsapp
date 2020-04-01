<script>
  import { goto } from "@sapper/app";

  export let id = "";
  export let name = "";
  export let description = "";
  //export let descriptiontwo = "";
  //export let organization = "";
  export let location = "";
  //export let imageUrl = "";
  //export let alt = "";
  export let disabled = false;

  async function goToCommunityPage() {
    await goto(`/communities/${id}`);
  }
</script>

<div class="px-4">
  <div
    class="flex flex-wrap -mx-4 lg:mb-64 xl:mb-64 rounded-xl overflow-hidden"
    class:opacity-50={disabled}>

    <div class="w-full lg:w-1/2">

      <div class="flex flex-col h-full p-8 bg-lightblue-100">

        <div class="flex flex-row mb-4">
          <div class="flex flex-col">
            <a
              class="text-3xl font-heading mb-2 font-semibold"
              href="/communities/{id}">
              {name}
            </a>
            <div class="mb-2 items-center">

              <span class="text-gray-500 flex flex-row">
                <h4
                  class="inline-block mt-0 text-gray-500 text-xs font-semibold
                  uppercase">
                  📍 {location}
                </h4>
              </span>

            </div>
          </div>
          <div class="flex flex-row">
            <span class="ml-2 px-2">
              <a
                href="https://en.rodekors.dk/"
                target="_blank"
                class="cursor-default">
                <img
                  class="w-20 mx-auto"
                  src="images/partners/red-cross.png"
                  alt="red-cross-denmark" />
              </a>
            </span>
            <span class="ml-2 px-2">
              <a
                href="https://www.grassrootseconomics.org/"
                target="_blank"
                class="cursor-default">
                <img
                  class="w-20 mx-auto"
                  src="images/partners/grassroots-economics.png"
                  alt="grassroots-economics" />
              </a>
            </span>
          </div>
        </div>

        <p class="mb-4 text-gray-800 leading-relaxed">
          {description.length <= 360 ? description : `${description.substr(0, 360)}...`}
        </p>

        <button
          class="bg-blue-600 hover:bg-blue-700 text-white py-2 mt-4 rounded-xl
          font-medium focus:outline-none"
          on:click={goToCommunityPage}>
          Donate
        </button>

      </div>

    </div>

    <div class="w-full lg:w-1/2 grid gap-0 grid-cols-2 grid-rows-2">

      <div
        class="bg-cover bg-center"
        style="background-image: url(images/sarafu-money-changer.jpg)" />
      <div
        class="bg-cover bg-center"
        style="background-image: url(images/sarafu-school.jpg)" />
      <div
        class="bg-cover bg-center"
        style="background-image: url(images/SDG/sdg11_small.jpg)" />
      <div
        class="bg-cover bg-center"
        style="background-image: url(images/SDG/sdg2_small.jpg)" />

    </div>

  </div>
</div>
