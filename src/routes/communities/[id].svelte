<script context="module">
  export async function preload({ params }) {
    return { id: params.id };
  }
</script>

<script>
  import Community from "../../components/Community.svelte";
  import ProjectGrid from "../../components/ProjectGrid.svelte";
  import communities from "../../components/communities";
  export let id;
  let community = communities.find(c => c.id === id);
</script>

<svelte:head>
  <title>{community.name}</title>
</svelte:head>

<div class="items-center justify-between p-4">
  <Community {community} />
  <ProjectGrid />

</div>
