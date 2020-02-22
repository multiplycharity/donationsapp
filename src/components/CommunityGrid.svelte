<script>
  import CommunityItem from "../components/CommunityItem.svelte";
  import communities from "./communities";
  import { fade } from "svelte/transition";
</script>

<section transition:fade class="py-12 px-4">
  <h2 class="text-3xl text-center mb-4 font-heading">
    Explore our communities
  </h2>
  <div class="flex flex-wrap -mx-4">

    {#each communities as community (community.name)}
      <CommunityItem {...community} />
    {/each}

  </div>
</section>
