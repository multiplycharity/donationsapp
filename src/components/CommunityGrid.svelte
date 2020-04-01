<script>
  import CommunityGridItem from "../components/CommunityGridItem.svelte";
  import CommunityGridItemSmall from "../components/CommunityGridItemSmall.svelte";
  import { communities as communityStore } from "../stores/communities.js";
  import { onDestroy } from "svelte";

  let communities;

  let primaryCommunities = [];

  const unsubscribe = communityStore.subscribe(items => {
    communities = items;
  });

  if (communities.some(community => community.isPrimary == true)) {
    primaryCommunities.push(
      communities.find(community => community.isPrimary == true)
    );
    communities = communities.filter(community => !community.isPrimary);
  }

  communities = communities.sort((a, b) => (a.disabled ? 1 : -1));

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

    {#if primaryCommunities.length > 0}
      {#each primaryCommunities as community}
        <div class="mb-8">
          <CommunityGridItem {...community} />
        </div>
      {/each}
    {/if}

    {#each communities as community}
      <CommunityGridItemSmall {...community} />
    {/each}

  </div>
</section>

<div class="backgroundImage" />
