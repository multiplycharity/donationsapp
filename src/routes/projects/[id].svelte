<script context="module">
  export async function preload({ params }) {
    return { id: params.id };
  }
</script>

<script>
  import Project from "../../components/Project.svelte";
  import projects from "../../components/projects";
  export let id;
  let project = projects.find(c => c.id === id);
</script>

<svelte:head>
  <title>{project.name}</title>
</svelte:head>

<div class="items-center justify-between p-4">
  <Project {project} />

</div>
