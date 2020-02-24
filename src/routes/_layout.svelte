<script context="module">
  export async function preload(page) {
    const res = await this.fetch(
      "https://quickstart-1565272791566.firebaseio.com/communities.json"
    );
    if (!res.ok) {
      this.error("Failed to fetch data");
    }
    const data = await res.json();

    let communities = [];
    for (const key in data) {
      communities.push({ ...data[key], id: key });
    }

    return { communities };
  }
</script>

<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import communitiesStore from "../stores/communities.js";

  export let communities;

  communitiesStore.set(communities);
</script>

<style global>
  .zoom {
    transition: transform 0.25s;
  }
  .zoom:hover {
    transform: scale(1.06);
  }

  .bn-onboard-modal {
    position: fixed !important;
    position: absolute; /*ie6 */
  }
</style>

<Tailwindcss />

<div class="container mx-auto px-4">
  <Navbar />
</div>

<main>
  <section>
    <slot />
  </section>
</main>

<div class="container mx-auto px-4">
  <Footer />
</div>
