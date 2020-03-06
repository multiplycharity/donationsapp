<script>
  export let id = 0;
  export let name = "";
  export let description = "";
  export let organization = "";
  export let location = "";
  export let imageUrl = "";
  export let alt = "";
  export let disabled = false;
</script>

<div
  class="md:w-1/2 lg:w-1/3 px-4 my-8 md:mb-2"
  class:opacity-50={disabled}
  class:zoom={!disabled}>
  <div class="h-full shadow-xl rounded-lg overflow-hidden">
    <a
      href={disabled ? null : `/communities/${id}`}
      class:cursor-not-allowed={disabled}>
      <img class="mb-4" src={imageUrl} {alt} />
      <div class="mx-4 my-6">
        <div class="mb-4 lg:mx-0 lg:ml-auto items-center">
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

          <h3 href="/" class="text-2xl mt-2 mb-4 font-medium text-gray-800">
            {name}
          </h3>

          <p class="text-gray-600">
            {description.length <= 180 ? description : `${description.substr(0, 180)}...`}
          </p>
          <!--<p class="text-gray-600">{descriptiontwo}</p>-->
        </div>
      </div>
    </a>
  </div>
</div>
