<script>
  export let label;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button
  class="zoom mr-2 my-1 bg-blue-200 rounded-full py-1 px-3 text-xs text-blue-700
  font-light hover:bg-blue-300 hover:text-white focus:outline-none"
  on:click={() => {
    dispatch('choosefilter', label);
  }}>
  #{label}
</button>
