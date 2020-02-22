<script>
  import { fade } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  export let hidden;
</script>

{#if !hidden}
  <div
    transition:fade
    class="navbar-menu lg:flex lg:flex-grow lg:items-center w-full lg:w-auto ">
    <slot />
  </div>
{:else}
  <div
    class="navbar-menu lg:flex lg:flex-grow lg:items-center w-full lg:w-auto
    hidden">
    <slot />
  </div>
{/if}
