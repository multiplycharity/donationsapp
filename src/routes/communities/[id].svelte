<script context="module">
  export async function preload({ params }) {
    return { id: params.id };
  }
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import communityStore from "../../stores/communities.js";
  import Community from "../../components/Community.svelte";
  import ProjectGrid from "../../components/ProjectGrid.svelte";

  export let id;

  let community;
  let projects = [];
  const unsubscribe = communityStore.subscribe(communities => {
    community = communities.find(c => c.id === id);
    Object.entries(community.projects).forEach(([key, value]) => {
      projects.push({ ...value, id: key });
    });
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<svelte:head>
  <title>{community.name}</title>
</svelte:head>

<div class="items-center justify-between py-4">

  <Community {community} />

  <div class="container mx-auto px-4">
    <ProjectGrid {projects} />
  </div>

</div>
