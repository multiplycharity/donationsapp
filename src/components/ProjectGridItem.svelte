<script>
  export let id = 0;
  export let name = "";
  export let description = "";
  export let sdgLogo = "";
  export let organization = "";
  export let location = "";
  export let imageUrl = "";
  export let alt = "";
  export let tags = [];
  export let disabled = false;

  import { goto } from "@sapper/app";

  import FilterTag from "./FilterTag.svelte";

  if (tags) {
    const tagsSet = new Set();
    for (let tag of tags) {
      tagsSet.add(tag);
    }
    tags = Array.from(tagsSet);
  }
</script>

<div
  class="md:w-1/2 lg:w-1/3 px-4 my-8 md:mb-2"
  class:opacity-50={disabled}
  class:zoom={!disabled}>
  <div class="h-full shadow-xl rounded-lg overflow-hidden">
    <div
      class="relative cursor-pointer"
      href={disabled ? null : `/projects/${id}`}
      class:cursor-not-allowed={disabled}
      on:click={async () => {
        if (!disabled) {
          await goto(`/projects/${id}`);
        }
      }}>

      <div class="absolute right-0 top-0 flex flex-row">
        <span class="px-2">
          <img
            class="m-2 w-16 mx-auto rounded-md"
            src={sdgLogo}
            alt="sustainable-development-goals" />
        </span>
      </div>

      <img class="mb-4" src={imageUrl} {alt} />

      <div class="mx-4 mb-6">

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

          <h3 class="text-2xl my-2 font-medium text-gray-800">{name}</h3>

          {#if tags}
            <div class="inline-flex flex-wrap">
              {#each tags as tag}
                <span on:click|stopPropagation>
                  <FilterTag label={tag} class="absolute" on:choosefilter />
                </span>
              {/each}
            </div>
          {/if}
        </div>

        <p class="text-gray-600">
          {description.length <= 180 ? description : `${description.substr(0, 180)}...`}
        </p>
      </div>
    </div>

  </div>
</div>
