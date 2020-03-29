<script>
  import { communities as communityStore } from "../stores/communities.js";
  import Header from "../components/Header.svelte";
  import CommunityGrid from "../components/CommunityGrid.svelte";
  import HowItWorks from "../components/HowItWorks.svelte";
  import HowToLeverage from "../components/HowToLeverage.svelte";
  import FAQ from "../components/FAQ.svelte";
</script>

<svelte:head>

  <title>Multiply Charity</title>
  <meta name="short_name" content="Donations with leverage" />
  <meta name="name" content="Donations with leverage" />
  <meta
    name="description"
    content="Improving charity and gaining live insights on donations and everyday blockchain payments." />
  <meta name="generator" content="Donations with leverage" />
  <meta
    name="keywords"
    content="charity, giving, sdgs, Blockchain, cryptocurrency, digital assets, Ethereum, Bitcoin, Community Currencies" />
  <meta name="author" content="Amir, Chris" />
  <meta name="twitter:card" content="Multiply Charity" />
  <meta name="twitter:site" content="@hello_amigo" />
  <meta name="twitter:title" content="Donations with leverage" />
  <meta
    name="twitter:description"
    content="Improving charity and gaining live insights on donations and everyday blockchain payments." />
  <meta name="twitter:creator" content="@chriscyber2000" />
  <meta
    name="twitter:image"
    content="https://multiply.charity/images/multiply-charity-header.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://multiply.charity" />
  <meta property="og:title" content="Donations with leverage" />
  <meta
    property="og:description"
    content="Improving charity and gaining live insights on donations and everyday blockchain payments." />
  <meta property="og:site_name" content="Multiply Charity" />
  <meta
    property="og:image"
    content="https://multiply.charity/images/multiply-charity-header.jpg" />
  <meta name="theme-color" content="#000000" />

  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <link rel="icon" type="image/ico" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/images/logo-192.png" />

</svelte:head>

  <Header />
<div class="container mx-auto px-4">
  <CommunityGrid />
  <HowItWorks />
  <FAQ />
</div>
