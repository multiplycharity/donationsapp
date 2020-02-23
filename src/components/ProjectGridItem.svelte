<script>
  export let id = 0;
  export let name = "";
  export let description = "";

  export let imageUrl = "";
  export let alt = "";
  export let label = "";
  export let disabled = false;
</script>

<div class="lg:w-1/3 px-4 my-8 lg:mb-0" class:opacity-50={disabled}>
  <div class="h-full shadow-xl rounded-lg overflow-hidden">
    <a href={disabled ? '' : `/projects/${id}`}>
      <span class="absolute text-sm py-1 px-3 m-2 text-white font-normal bg-indigo-500 rounded-full">{label}</span>
      <img class="mb-4" src={imageUrl} {alt} />
      <div class="mx-4 my-6">
        <h3 href="#" class="text-2xl my-2 font-medium">{name}</h3>
        <p class="text-gray-600">{description}</p>
      </div>
    </a>
  </div>
</div>
