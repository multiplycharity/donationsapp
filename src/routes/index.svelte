<script>
  import communitiesStore from "../stores/communities.js";
  import Header from "../components/Header.svelte";
  import CommunityGrid from "../components/CommunityGrid.svelte";
  import HowItWorks from "../components/HowItWorks.svelte";
</script>

<svelte:head>

  <title>Welcome</title>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <link rel="icon" type="image/png" sizes="16x16" href="favicon.png" />

</svelte:head>

<div class="container mx-auto px-4">
  <Header />
  <CommunityGrid />
  <HowItWorks />
</div>
