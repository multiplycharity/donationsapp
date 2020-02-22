<script>
  import { slide } from "svelte/transition";
  export let hidden;
</script>

{#if !hidden}
  <div
    transition:slide={{ delay: 100, duration: 1000 }}
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
