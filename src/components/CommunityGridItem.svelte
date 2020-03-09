<script>
  export let id = 0;
  export let name = "";
  export let description = "";
  //export let descriptiontwo = "";
  //export let organization = "";
  export let location = "";
  export let imageUrl = "";
  //export let alt = "";
  export let disabled = false;
</script>

  <div
    class="flex flex-wrap -mx-4 lg:mb-64 xl:mb-64 lg:pb-8 xl:pb-8"
    class:opacity-50={disabled}>
    <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">

        <div class="flex flex-col h-full p-8 bg-gray-200 rounded">

          <div class="flex flex-row mb-4">
            <div class="flex flex-col">
              <h2 class="text-3xl font-heading mb-2">{name}</h2>
              <div class="mb-8 items-center">
                <!--<h4
                  class="inline-block mt-0 text-gray-500 text-xs font-semibold
                  uppercase">
                  {organization}
                </h4>-->
                <span class="text-gray-500 flex flex-row">
                  <img class="" src="images/icons/map-pin.svg" alt="📍">
                  <h4
                    class="inline-block ml-2 mt-0 text-gray-500 text-xs font-semibold
                    uppercase">
                    {location}
                  </h4>
                </span>

              </div>
            </div>
            <div class="ml-auto flex flex-row">

              <span class="px-2 text-gray-500 text-xs font-semibold uppercase bg-white text-center">
                <a href="https://en.rodekors.dk/" target="_blank" class="cursor-default">
                  <img class="m-1 w-10 mx-auto" src="images/partners/red-cross.svg" alt="red-cross-denmark">
                  <div class="m-1">Danish<br/>Red Cross</div>
                </a>
              </span>
              <span class="ml-4 px-2 text-gray-500 text-xs font-semibold uppercase bg-white text-center">
                <a href="https://www.grassrootseconomics.org/" target="_blank" class="cursor-default">
                  <img class="m-3 w-10 mx-auto" src="images/partners/grassroots-economics.jpg" alt="grassroots-economics">
                  <div class="m-1">Grassroots<br/>Economics</div>
                </a>
              </span>

            </div>
          </div>


          <p class="mb-4 text-gray-500 leading-relaxed">{description.length <= 320 ? description : `${description.substr(0, 420)}...`}</p>
          <a
            class="text-blue-700 hover:underline"
            href={disabled ? null : `/communities/${id}`}
            class:cursor-not-allowed={disabled}>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            View all {name} campaigns
            </button>
            </a>
        </div>

    </div>
    <div class="lg:w-1/2 px-4">
      <div class="flex flex-wrap -m-2">
        <div class="w-1/2 p-2">
          <a
            class="text-blue-700 hover:underline"
            href={disabled ? null : `/communities/${id}`}
            class:cursor-not-allowed={disabled}>
            <img class="rounded shadow-md" class:zoom={!disabled} src={imageUrl} alt="">
          </a>
        </div>
        <div class="w-1/2 p-2">
          <a
            class="text-blue-700 hover:underline"
            href={disabled ? null : `/communities/${id}`}
            class:cursor-not-allowed={disabled}>
            <img class="rounded shadow-md" class:zoom={!disabled} src="images/Frame_44.jpg" alt="">
          </a>
        </div>
        <div class="w-1/2 p-2">
          <a
            class="text-blue-700 hover:underline"
            href={disabled ? null : `/communities/${id}`}
            class:cursor-not-allowed={disabled}>
            <img class="rounded shadow-md" class:zoom={!disabled} src="images/SDG/sdg11_small.jpg" alt="">
          </a>
        </div>
        <div class="w-1/2 p-2">
          <a
            class="text-blue-700 hover:underline"
            href={disabled ? null : `/communities/${id}`}
            class:cursor-not-allowed={disabled}>
            <img class="rounded shadow-md" class:zoom={!disabled} src="images/SDG/sdg2_small.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
