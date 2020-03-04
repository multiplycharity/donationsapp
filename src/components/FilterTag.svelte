<script>
  export let label = "label";
  export let isChosen = false;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

{#if isChosen}
  <button
    class="zoom mr-2 my-1 rounded-full py-1 px-3 text-xs font-light
    hover:text-white focus:outline-none text-white bg-lightblue-500
    hover:bg-lightblue-500"
    class:style={true}
    on:click={() => {
      dispatch('choosefilter', label);
    }}>
    #{label}
  </button>
{:else}
  <button
    class="zoom mr-2 my-1 rounded-full py-1 px-3 text-xs font-light
    hover:text-white focus:outline-none text-lightblue-700 bg-lightblue-200
    hover:bg-lightblue-300"
    class:style={true}
    on:click={() => {
      dispatch('choosefilter', label);
    }}>
    #{label}
  </button>
{/if}
