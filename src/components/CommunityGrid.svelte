<script>
  import CommunityGridItem from "../components/CommunityGridItem.svelte";
  import communities from "./communities";
  import { fade } from "svelte/transition";
</script>

<section transition:fade class="py-12 px-4">
  <h2 class="text-3xl text-center mb-4 font-heading">
    Explore our communities
  </h2>
  <div class="flex flex-wrap -mx-4">

    {#each communities as community (community.id)}
      <CommunityGridItem {...community} />
    {/each}

  </div>
</section>
