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
    <a class="text-xl font-semibold text-blue-600" href="/" on:click={hideMenu}>
      Abundance
    </a>
  </div>

  <div class="block lg:hidden">
    <button
      class="navbar-burger flex items-center py-2 px-3 text-blue-600"
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

    <div class="lg:ml-auto">
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-gray-600"
        href="#how-it-works"
        on:click={hideMenu}>
        How it works
      </a>
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-gray-600"
        href="about"
        on:click={hideMenu}>
        About us
      </a>
      <a
        class="block lg:inline-block mt-4 lg:mt-0 mr-10 hover:text-gray-600"
        href="success-stories"
        on:click={hideMenu}>
        Success stories
      </a>
    </div>

    <!--<div>
      <a
        class="inline-block py-3 px-5 mr-4 leading-none text-center text-white
        bg-blue-500 hover:bg-blue-600 rounded shadow"
        href="/"
        on:click={hideMenu}>
        Sign in
      </a>
      <a
        class="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white
        bg-blue-500 hover:bg-blue-600 rounded shadow-xl"
        href="/"
        on:click={hideMenu}>
        Sign up
      </a>
    </div>-->

  </Menu>

</nav>
