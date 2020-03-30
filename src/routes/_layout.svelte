<script context="module">
  export async function preload(page) {
    const res = await this.fetch(
      "https://quickstart-1565272791566.firebaseio.com/communities.json"
    );
    if (!res.ok) {
      this.error("Failed to fetch data");
    }
    const data = await res.json();

    let communitiesArray = [];
    for (const key in data) {
      communitiesArray.push({ ...data[key], id: key });
    }

    return { communitiesArray };
  }
</script>

<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";

  import { stores } from "@sapper/app";
  const { page } = stores();
  $: {
    if (typeof gtag !== "undefined") {
      //console.log($page.path);
      gtag("config", "UA-158739784-2", {
        page_path: $page.path
      });
    }
  }

  import { communities } from "../stores/communities.js";

  export let communitiesArray;

  communities.set(communitiesArray);
</script>

<style global>
  /* body * {
    color: hsla(210, 100%, 100%, 0.88) !important;
    background: hsla(210, 100%, 50%, 0.33) !important;
    outline: 0.25rem solid hsla(210, 100%, 100%, 0.5) !important;
  } */

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

  /* h2.transaction-flow__title {
    visibility: hidden;
  }

  h1.initial-load--logo {
    visibility: hidden;
  } */
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
