<script>
  export let id = 0;
  export let name = "";
  export let description = "";
  export let description2 = "";
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
  <div
    class="h-full shadow-xl rounded-lg overflow-hidden"
    class:hover:shadow-2xl={!disabled}>
    <a
      href={disabled ? null : `/communities/${id}`}
      class:cursor-not-allowed={disabled}>
      <img class="mb-4" src={imageUrl} {alt} />
      <div class="mx-4 my-6">

        <h3 href="#" class="text-2xl my-2 font-medium">{name}</h3>

        <div class="mx-auto mb-8 lg:mx-0 lg:ml-auto">
          <a class="inline-block mt-0 text-blue-900 hover:text-blue-700 text-sm" href="#">{organization}</a>
          <img class="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700 text-sm" src="/icons/maps_pin.svg" alt="location">
          <a class="inline-block mt-0 text-blue-900 hover:text-blue-700 text-sm" href="#">{location}</a>
        </div>

        <p class="text-gray-600 mb-4">{description}</p>
        <p class="text-gray-600">{description2}</p>

      </div>
    </a>
  </div>
</div>
