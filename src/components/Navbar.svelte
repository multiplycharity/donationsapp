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

<nav class="flex flex-wrap items-center justify-between p-4">

  <div class="flex flex-shrink-0 mr-6">
    <a
      class="text-xl text-indigo-500 font-semibold"
      href="/"
      on:click={hideMenu}>
      Abundance
    </a>
  </div>

  <div class="block lg:hidden">
    <button
      class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded
      border border-indigo-500"
      on:click={toggleMenu}>
      <svg
        class="fill-current h-3 w-3"
        viewbox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>

  <Menu hidden={isMenuHidden}>

    <div class="lg:ml-auto">
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900
        hover:text-blue-700"
        href="#how-it-works"
        on:click={hideMenu}>
        How it works
      </a>
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900
        hover:text-blue-700"
        href="about"
        on:click={hideMenu}>
        About us
      </a>
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900
        hover:text-blue-700"
        href="success-stories"
        on:click={hideMenu}>
        Success stories
      </a>
    </div>

    <div>
      <a
        class="inline-block py-3 px-5 mr-4 leading-none text-center
        text-blue-700 bg-indigo-100 hover:bg-indigo-200 rounded shadow"
        href="/"
        on:click={hideMenu}>
        Sign in
      </a>
      <a
        class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white
        bg-indigo-500 hover:bg-indigo-600 rounded shadow-xl"
        href="/"
        on:click={hideMenu}>
        Sign up
      </a>
    </div>

  </Menu>

</nav>
