<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<Tailwindcss />

<div class="container mx-auto px-4">

  <Navbar {segment} />

  <main>
    <slot />
  </main>

  <Footer />

</div>
