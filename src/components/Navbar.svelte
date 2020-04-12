<script>
  import Menu from "../components/Menu.svelte";
  let isMenuHidden = true;
  function toggleMenu() {
    isMenuHidden = !isMenuHidden;
  }
  function hideMenu() {
    isMenuHidden = true;
  }
</script>

<nav
  class="flex flex-wrap items-center justify-between px-4 py-2 text-gray-800">

  <div class="flex flex-shrink-0 mr-6">
    <a class="flex items-center align-middle" href="/" on:click={hideMenu}>

      <img class="w-8 h-8 mx-4" src="images/logo-192.png" alt="" />
      <span class="text-lg text-blue-600">multiply</span>
      <!--<span class="mx-1">•</span>
      <span class="text-green-600">charity</span>-->

    </a>
  </div>

  <div class="block lg:hidden">
    <button
      class="navbar-burger flex items-center py-2 px-3 text-gray-800"
      on:click={toggleMenu}>

      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="fill-current w-6 h-6">
        <title>Menu</title>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7" />
      </svg>

    </button>
  </div>

  <Menu hidden={isMenuHidden}>

    <div class="lg:ml-auto font-medium tracking-wide">
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-gray-600"
        href="#how-it-works"
        on:click={hideMenu}>
        How it works
      </a>
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-gray-600"
        href="#faq"
        on:click={hideMenu}>
        FAQ
      </a>
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-gray-600"
        href="about"
        on:click={hideMenu}>
        About us
      </a>

    </div>

  </Menu>

</nav>
