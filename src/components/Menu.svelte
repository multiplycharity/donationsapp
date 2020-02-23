<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  export let hidden;
</script>

{#if !hidden}
  <div
    transition:slide={{ duration: 250, easing: quintOut }}
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
