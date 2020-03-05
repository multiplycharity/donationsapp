<script>
  import emailStore from "../stores/email";
  import saveToMailchimp from "../services/mailchimp.js";

  let previouslyChosenEmail = window.localStorage.getItem("email");
  if (previouslyChosenEmail) emailStore.set(previouslyChosenEmail);

  let isValidEmail = false;
  let email = "";

  let touched = { email: false };

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  $: isValidEmail = validateEmail($emailStore) || validateEmail(email);

  async function setEmail() {
    if (!previouslyChosenEmail && !$emailStore) {
      window.localStorage.setItem("email", email);
      emailStore.set(email);
    }

    const { success, response, error } = await saveToMailchimp(email);

    if (!success && error) {
      console.error(error);
    }
  }
</script>

<section
  class="text-center bg-cover h-full"
  style="background-image: url(images/tractor_dark.jpg)">

  <div class="container mx-auto px-4">
    <div
      class="flex flex-wrap items-center text-center -mx-2 pt-16 md:pt-32
      lg:pt-32 xl:pt-32 pb-24 md:pb-32 lg:pb-32 xl:pb-32">

      <div class="px-2 mt-8 mx-auto lg:mt-8">

        <h2
          class="text-white text-4xl md:text-5xl mt-4 lg:mt-0 leading-tight
          font-heading">
          Leverage your Impact
        </h2>
        <p class="max-w-lg my-4 text-gray-300 text-xl leading-relaxed">
          Donate directly to people living in poverty, and track your impact on
          local economic growth.
        </p>

        {#if !previouslyChosenEmail && !$emailStore}
          <div class="flex flex-wrap justify-center">

            <form class="w-full max-w-lg mx-auto lg:mx-0 text-center">
              <div class="flex flex-wrap mb-6 md:mb-0">
                <div class="w-full md:w-2/3">
                  <input
                    class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0
                    leading-snug text-gray-700 bg-gray-200 focus:bg-white border
                    border-gray-200 focus:border-gray-500 rounded
                    md:rounded-r-none focus:outline-none"
                    type="text"
                    placeholder="Email"
                    bind:value={email}
                    on:blur={() => (touched.email = true)} />
                </div>
                <div class="w-full md:w-1/3">
                  <button
                    class="inline-block w-full py-4 px-8 leading-none text-white
                    bg-blue-500 hover:bg-blue-600 rounded md:rounded-l-none"
                    class:cursor-not-allowed={!isValidEmail}
                    disabled={!isValidEmail}
                    on:click={setEmail}>
                    Subscribe
                  </button>
                </div>

                <p
                  class="text-red-500 text-xs italic mt-1"
                  class:hidden={isValidEmail || !touched.email}>
                  Please enter a valid email
                </p>
              </div>
              <!-- <p class="text-sm text-gray-500 mt-2 leading-relaxed">
                Follow our community updates
              </p> -->
            </form>
          </div>
        {/if}

      </div>
    </div>
  </div>

</section>

<section class="py-8 px-4">

  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4 text-center">

      <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading">
        <h3 class="md:text-3xl text-2xl">
          <span class="md:text-4xl text-3xl font-medium">8500+</span>
          <br />
          people trading
        </h3>
      </div>

      <div
        class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading md:border-l">
        <h3 class="md:text-3xl text-2xl">
          <span class="md:text-4xl text-3xl font-medium">>$7,500</span>
          <br />
          donated
        </h3>
      </div>

      <div
        class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading md:border-l">
        <h3 class="md:text-3xl text-2xl">
          <span class="md:text-4xl text-3xl font-medium">>$67,000</span>
          <br />
          verified impact
        </h3>
      </div>

    </div>
  </div>

</section>
