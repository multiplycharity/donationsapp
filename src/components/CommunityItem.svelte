<script>
  export let name = "";
  export let description = "";
  export let url = "";
  export let imageUrl = "";
  export let alt = "";
  export let disabled = false;

  import { fade } from "svelte/transition";
</script>

<div
  transition:fade
  class="lg:w-1/3 px-4 my-8 lg:mb-0"
  class:opacity-50={disabled}>
  <div class="h-full shadow-xl rounded-lg overflow-hidden">
    <a href={url}>
      <img class="mb-4" src={imageUrl} {alt} />
      <div class="mx-4 my-6">
        <h3 href="#" class="text-2xl my-2 font-medium">{name}</h3>
        <p class="text-gray-600">{description}</p>
      </div>
    </a>
  </div>
</div>
