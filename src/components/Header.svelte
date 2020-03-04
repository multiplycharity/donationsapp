<script>
  import Menu from "../components/Menu.svelte";
  import { fade } from 'svelte/transition';

  let isMenuHidden = true;

  function toggleMenu() {
    isMenuHidden = !isMenuHidden;
  }

  function hideMenu() {
    isMenuHidden = true;
  }

  let visible = false;

  function switchVisibility() {
    visible =! visible;
  }
</script>



<section
  class="bg-cover h-full pt-6 px-4"
  style="background-image: url(images/tractor_dark.jpg)">
  
<!-- navbar -->
  <div class="container mx-auto px-4">
  <!--<nav class="flex flex-wrap items-center justify-between p-4">

    <div class="flex flex-shrink-0 mr-6">
      <a class="text-xl font-semibold text-blue-600" href="/" on:click={hideMenu}>
        Abundance
      </a>
    </div>

    <div class="block lg:hidden">
      <button
        class="navbar-burger flex items-center py-2 px-3 text-blue-300"
        on:click={toggleMenu}>

        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="fill-current w-5 h-5">
          <title>Menu</title>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>

      </button>
    </div>

    <Menu hidden={isMenuHidden}>

      <div class="lg:ml-auto text-blue-100">
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-orange-300"
          href="#how-it-works"
          on:click={hideMenu}>
          How it works
        </a>
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-orange-300"
          href="about"
          on:click={hideMenu}>
          About us
        </a>
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-orange-300"
          href="success-stories"
          on:click={hideMenu}>
          Success stories
        </a>
      </div>

    </Menu>

  </nav>

  </div>-->

  <!-- header -->

  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center text-center -mx-2 pt-16 md:pt-32 lg:pt-32 xl:pt-32 pb-24 md:pb-32 lg:pb-32 xl:pb-32">
      <!--<div class="lg:w-1/2 px-2">
        <img class="shadow-2xl rounded-lg" src="images/Frame_47.jpg" alt="" />
      </div>-->
      <div class="px-2 mt-8 mx-auto lg:mt-8">

        <h2 class="text-white text-4xl md:text-5xl mt-4 lg:mt-0 leading-tight font-heading">
          Leverage your Impact
        </h2>
        <p class="my-4 text-gray-300 leading-relaxed">
          Donate directly to people living in poverty, and track your impact on local economic growth.
        </p>

        <div class="flex flex-wrap justify-center">
          <div class="px-4 ">
          <form class="w-full max-w-lg mx-auto lg:mx-0">
            <div class="flex flex-wrap mb-6 md:mb-0">
              {#if visible}
              <div class="" transition:fade>
                <input
                  class="appearance-none block w-full py-3 px-4 mb-4 md:mb-0
                  leading-snug text-gray-700 bg-gray-200 focus:bg-white border
                  border-gray-200 focus:border-gray-500 rounded md:rounded-r-none
                  focus:outline-none"
                  type="text"
                  placeholder="Email" />
              </div>
              {/if}
              <div class=""> <!-- this class needs to change on visible -->
                <button
                  class="inline-block w-full py-4 px-8 leading-none text-white
                  bg-blue-500 hover:bg-blue-600 rounded md:rounded-l-none" on:click={switchVisibility}>
                  Subscribe
                </button>
              </div>
            </div>
            <!--<p class="text-sm text-gray-300 mt-2 leading-relaxed">
              Follow our updates
            </p>-->
          </form>
          </div>
          <div class="w-full md:w-1/3 px-4">
            <button
              class="inline-block w-full py-4 px-8 leading-none text-blue-100 border border-blue-500
              bg-transparent hover:text-blue-300 rounded" on:click={switchVisibility}>
              Learn more
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="flex flex-wrap pt-8 px-4 -mx-4 text-center text-orange-100">

  <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading">
        <h3 class="md:text-lg text-lg">
          <span class="md:text-4xl text-3xl font-medium">8500+</span>
          <br />
          people trading
        </h3>
      </div>

      <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading md:border-l">
        <h3 class="md:text-lg text-lg">
          <span class="md:text-4xl text-3xl font-medium">>$7,500</span>
          <br />
          donated
        </h3>
      </div>

      <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading md:border-l">
        <h3 class="md:text-lg text-lg">
          <span class="md:text-4xl text-3xl font-medium">>$67,000</span>
          <br />
          verified impact
        </h3>
      </div>

  </div>
</section>
