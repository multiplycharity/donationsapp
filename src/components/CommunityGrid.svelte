<script>
  import CommunityGridItem from "../components/CommunityGridItem.svelte";
  import communityStore from "../stores/communities.js";
  // import { fade } from "svelte/transition";
  import { onDestroy } from "svelte";

  let communities;

  const unsubscribe = communityStore.subscribe(items => {
    communities = items;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<section class="py-12 px-4">
  <h2 class="text-3xl text-center mb-4 font-heading">
    Explore our communities
  </h2>
  <div class="flex flex-wrap -mx-4">

    {#each communities as community}
      <CommunityGridItem {...community} />
    {/each}

  </div>
</section>
