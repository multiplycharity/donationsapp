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

<style>
  @media (min-width: 1024px) {
    .backgroundImage {
      background-image: url(images/earth.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 50% 50%;
    }
  }
</style>

<section class="py-16 px-4 backgroundImage">
  <h2 class="text-3xl text-left mb-12 font-heading">Explore our communities</h2>
  <div class="flex flex-wrap -mx-4">

    <!-- if id == 1 then show CommunityGridItem, else use CommunityGridItemSmall-->
    {#each communities as community}
      {#if community.name == 'The Kenian Sarafu'}
        <div class="mb-8">
          <CommunityGridItem {...community} />
        </div>
      {:else}
        <CommunityGridItemSmall {...community} />
      {/if}
    {/each}

  </div>
</section>

<div class="backgroundImage" />
