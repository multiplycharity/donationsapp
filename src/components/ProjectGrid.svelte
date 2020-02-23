<script>
  import ProjectGridItem from "../components/ProjectGridItem.svelte";
  import projects from "./projects";
  import { fade } from "svelte/transition";
</script>

<section transition:fade class="py-12 px-4">
  <h2 class="text-3xl text-center mb-4 font-heading">Projects you can fund</h2>
  <!-- <h2 class="text-3xl text-center mb-4 font-heading">Campaigns you can fund</h2> -->
  <div class="flex flex-wrap -mx-4">

    {#each projects as project}
      <ProjectGridItem {...project} />
    {/each}

  </div>
</section>
