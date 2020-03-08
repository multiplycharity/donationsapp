<script>
  export let id = 0;
  export let name = "";
  export let description = "";
  //export let descriptiontwo = "";
  export let organization = "";
  export let location = "";
  export let imageUrl = "";
  //export let alt = "";
  export let disabled = false;
</script>

  <div
    class="flex flex-wrap -mx-4 lg:mb-64 xl:mb-64"
    class:opacity-50={disabled}>
    <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">

        <div class="flex flex-col h-full p-8 bg-gray-200 rounded">
          <h2 class="text-3xl font-heading">{name}</h2>
          <div class="mb-8 items-center">
            <h4
              class="inline-block mt-0 text-gray-500 text-xs font-semibold
              uppercase">
              {organization}
            </h4>
            <span class="text-gray-500 mx-1">•</span>
            <h4
              class="inline-block mt-0 text-gray-500 text-xs font-semibold
              uppercase">
              {location}
            </h4>
          </div>
          <p class="mb-4 text-gray-500 leading-relaxed">{description.length <= 420 ? description : `${description.substr(0, 420)}...`}</p>
          <a
            class="text-blue-700 hover:underline"
            href={disabled ? null : `/communities/${id}`}
            class:cursor-not-allowed={disabled}>
              View all {name} campaigns
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
