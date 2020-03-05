<script>
  import { communities as communityStore } from "../stores/communities.js";
  import Header from "../components/Header.svelte";
  import CommunityGrid from "../components/CommunityGrid.svelte";
  import HowItWorks from "../components/HowItWorks.svelte";
</script>

<svelte:head>

  <title>Abundance Giving</title>
  <meta name="short_name" content="Donations with leverage" />
  <meta name="name" content="Donations with leverage" />
  <meta
    name="description"
    content="Send money directly to people living in extreme poverty, and track
    your impact on local economic growth." />
  <meta name="generator" content="Donations with leverage" />
  <meta
    name="keywords"
    content="Blockchain, cryptocurrency, digital assets, Ethereum, Bitcoin,
    Community Currencies" />
  <meta name="author" content="Amir, Chris" />
  <meta name="twitter:card" content="Abundance" />
  <meta name="twitter:site" content="@hello_amigo" />
  <meta name="twitter:title" content="Donations with leverage" />
  <meta
    name="twitter:description"
    content="Send money directly to people living in extreme poverty, and track
    your impact on local economic growth." />
  <meta name="twitter:creator" content="@chriscyber2000" />
  <meta
    name="twitter:image"
    content="https://donationsapp.herokuapp.com/images/Frame_45.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://donationsapp.herokuapp.com/" />
  <meta property="og:title" content="Donations with leverage" />
  <meta
    property="og:description"
    content="Send money directly to people living in extreme poverty, and track
    your impact on local economic growth." />
  <meta property="og:site_name" content="Abundance" />
  <meta
    property="og:image"
    content="https://donationsapp.herokuapp.com/images/Frame_45.jpg" />
  <meta name="theme-color" content="#000000" />

  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <link rel="icon" type="image/ico" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/logo-192.png" />

</svelte:head>

<Header />
<div class="container mx-auto px-4">
  <CommunityGrid />
  <HowItWorks />
</div>
