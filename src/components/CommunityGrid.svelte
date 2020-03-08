<script>
  import CommunityGridItem from "../components/CommunityGridItem.svelte";
  import CommunityGridItemSmall from "../components/CommunityGridItemSmall.svelte";
  import { communities as communityStore } from "../stores/communities.js";
  import { onDestroy } from "svelte";

  let communities;

  const unsubscribe = communityStore.subscribe(items => {
    communities = items;
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<section class="py-16 px-4" style="background-image: url(images/earth.svg); background-position: center; background-repeat: no-repeat; background-size: 50% 50%;">
  <h2 class="text-3xl text-center mb-4 font-heading">
    Explore our communities
  </h2>
  <div class="flex flex-wrap -mx-4">

<!-- if id == 1 then show CommunityGridItem, else use CommunityGridItemSmall-->
    {#each communities as community}
      {#if community.name == "The Kenian Sarafu"}
        <CommunityGridItem {...community} />
      {:else}
        <CommunityGridItemSmall {...community} />
      {/if}
    {/each}

  </div>
</section>
