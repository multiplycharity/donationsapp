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

  let chosenFilter = "all";

  function applyFilter(e) {
    chosenFilter = e.detail;

    projects = getCommunityProjects(community);

    if (e.detail === "all") {
      return;
    }

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

  <!--<Community {community} />-->

  <h2 class="text-3xl text-center pt-12 mb-4 font-heading">
    {community.name}
  </h2>

  <!--<div class="py-4 px-24 mb-6 lg:mb-0">
    <p class="leading-relaxed">{community.description}</p>
  </div>
  <div class="py-4 px-24">
    <p class="leading-relaxed">{community.descriptiontwo}</p>
  </div>-->

  <div class="xl:flex xl:flex-row lg:flex lg:flex-row">
    <div class="container sm:w-full md:w-full lg:w-3/4 xl:w-3/4 mx-auto">

      <div class="bg-gray-100 rounded-lg px-12 py-8 mt-12 shadow-lg">
        <h2 class="font-medium text-2xl my-4">
          Campaigns you can fund
        </h2>
        <p class="font-normal text-lg my-4">Filter by impact category</p>
        <div class="inline-flex flex-wrap w-full">
          <FilterTag
            label={'all'}
            isChosen={chosenFilter === 'all'}
            on:choosefilter={applyFilter} />
          {#each $tags as tag}
            <FilterTag
              label={tag}
              isChosen={chosenFilter === tag}
              on:choosefilter={applyFilter} />
          {/each}

        </div>
      </div>

      <ProjectGrid {projects} on:choosefilter={applyFilter} />

    </div>
    <div class="container sm:w-full md:w-full lg:w-1/4 xl:w-1/4 mx-auto">

    <div class="bg-gray-100 rounded-lg px-12 py-8 mt-12 shadow-lg">
      <h3 class="font-medium text-2xl my-4">Community background</h3>
      <div class="inline-flex flex-wrap w-full">
        <div class="px-2 pt-2">
          <p class="leading-relaxed text-sm pb-4">{community.description}</p>
          <p class="leading-relaxed text-sm">{community.descriptiontwo}</p>

        </div>
      </div>
    </div>

    <div class="bg-gray-100 rounded-lg px-12 py-8 mt-12 shadow-lg">
      <h3 class="font-medium text-2xl my-4">Impact insights</h3>
      <div class="inline-flex flex-wrap w-full">
        <div class="p-4 w-1/2">
          <h3 class="md:text-lg text-lg">
            <span class="md:text-xl text-xl font-medium">$23,000</span>
            <br />
            traded
          </h3>
        </div>
        <div class="p-4 w-1/2">
          <h3 class="md:text-lg text-lg">
            <span class="md:text-xl text-xl font-medium">
              3x velocity
            </span>
            <br />
            vs USD
          </h3>
        </div>
        <div class="p-4 w-1/2">
          <h3 class="md:text-lg text-lg">
            <span class="md:text-xl text-xl font-medium">2x+ impact</span>
            <br />
            vs GiveDirectly
          </h3>
        </div>
        <div class="p-4 w-1/2">
          <h3 class="md:text-lg text-lg">
            <span class="md:text-xl text-xl font-medium">2x+ impact</span>
            <br />
            vs GiveDirectly
          </h3>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 rounded-lg px-12 py-8 mt-12 shadow-lg bg-cover h-64" style="background-image: url(images/kenya_mapbox.png)">
      <h3 class="font-medium text-2xl my-4">The area</h3>
      <div class="inline-flex flex-wrap w-full">
        <div class="px-2 pt-2">

        </div>
      </div>
    </div>

    <div class="bg-gray-100 rounded-lg px-12 py-8 mt-12 shadow-lg">
      <h3 class="font-medium text-2xl my-4">FAQ</h3>
      <div class="inline-flex flex-wrap w-full">
        How does this all work?
      </div>
    </div>

    </div>
  </div>
</div>
