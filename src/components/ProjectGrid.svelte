<script>
  import ProjectGridItem from "../components/ProjectGridItem.svelte";
  export let projects;

  projects = projects.sort((a, b) => (a.disabled ? 1 : -1));
</script>

<section class="py-12 px-4">
  <!--<h2 class="text-3xl text-center mb-4 font-heading">Projects you can fund</h2>-->
  <div class="flex flex-wrap -mx-4">
    {#if projects.length !== 0}
      {#each projects as project}
        <ProjectGridItem {...project} on:choosefilter />
      {/each}
    {/if}
  </div>
</section>
