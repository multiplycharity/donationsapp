<script context="module">
  export async function preload({ params }) {
    return { id: params.id };
  }
</script>

<script>
  import { onMount, onDestroy } from "svelte";
  import { communities } from "../../stores/communities.js";
  import { tags } from "../../stores/communities";

  import Community from "../../components/Community.svelte";
  import ProjectGrid from "../../components/ProjectGrid.svelte";
  import FilterTag from "../../components/FilterTag.svelte";

  export let id;

  let community;
  let projects = [];

  community = $communities.find(c => c.id === id);
  projects = getCommunityProjects(community);

  function applyFilter(e) {
    projects = getCommunityProjects(community);

    const filteredProjects = [];

    for (let project of projects) {
      if (project.tags) {
        let tagsSet = new Set();

        for (let tag of project.tags) {
          tagsSet.add(tag);
        }

        for (let tag of Array.from(tagsSet)) {
          if (tag === e.detail) {
            filteredProjects.push(project);
          }
        }
      }
    }
    projects = filteredProjects;
  }

  function getCommunityProjects(community) {
    let projectsArr = [];
    Object.entries(community.projects).forEach(([key, value]) => {
      projectsArr.push({ ...value, id: key });
    });
    return projectsArr;
  }
</script>

<svelte:head>
  <title>{community.name}</title>
</svelte:head>

<div class="items-center justify-between ">

  <Community {community} />

  <div class="container mx-auto px-4">

    <div class="bg-gray-100 rounded-lg px-12 py-8 mt-12 shadow-lg">
      <h3 class="font-medium text-2xl my-4">Filter by</h3>
      <div class="inline-flex flex-wrap w-full">
        {#each $tags as tag}
          <FilterTag label={tag} on:choosefilter={applyFilter} />
        {/each}

      </div>
    </div>

    <ProjectGrid {projects} on:choosefilter={applyFilter} />
  </div>

</div>
