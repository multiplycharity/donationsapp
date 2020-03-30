<script>
  import emailStore from "../stores/email";
  import { fade } from "svelte/transition";

  let previouslyChosenEmail = "";

  if (typeof window !== "undefined") {
    previouslyChosenEmail = window.localStorage.getItem("email");
    if (previouslyChosenEmail) emailStore.set(previouslyChosenEmail);
  }

  let subscribed = false;
  let isValidEmail = false;
  let email = "";
  let touched = { email: false };
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  $: isValidEmail = validateEmail($emailStore) || validateEmail(email);

  async function setEmail() {
    fetch(`api/add-user/?email=${email}`)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          if (!previouslyChosenEmail && !$emailStore) {
            window.localStorage.setItem("email", email);
            emailStore.set(email);
          }
          subscribed = true;
          console.log(`Subscribed user ${email} to mailchimp`);
        } else if (!res.success && res.error) console.error(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
</script>

<section
  class="text-center bg-cover h-full items-center"
  style="background-image: url(images/group-of-kenyans.jpg)">

  <div class="container mx-auto px-4">
    <div
      class="flex flex-wrap items-center text-center -mx-2 pt-16 md:pt-32
      lg:pt-32 xl:pt-32 pb-24 md:pb-32 lg:pb-32 xl:pb-32">

      <div class="px-2 mt-8 mx-auto my-auto lg:mt-8">

        <h2
          class="text-white text-4xl md:text-5xl mt-4 lg:mt-0 leading-tight
          font-heading font-medium">
          Leverage your impact
        </h2>
        <p class="max-w-lg my-4 text-gray-300 text-xl leading-relaxed">
          Improving charity and gaining live insights on donations and everyday
          blockchain payments
        </p>

        <!-- {#if !previouslyChosenEmail && !$emailStore} -->
        <div class="flex flex-wrap justify-center">

          <form class="w-full max-w-lg mx-auto lg:mx-0 text-center">
            <div class="flex flex-wrap mb-6 md:mb-0">
              <div class="w-full md:w-2/3">
                <input
                  class="appearance-none block w-full py-3 px-4 mb-2 md:mb-0
                  leading-snug text-gray-700 bg-gray-200 focus:bg-white border
                  border-gray-200 focus:border-gray-500 rounded-xl
                  md:rounded-r-none focus:outline-none"
                  type="email"
                  placeholder="Email"
                  bind:value={email}
                  on:blur={() => (touched.email = true)} />
              </div>
              <div class="w-full md:w-1/3">
                <button
                  class="inline-block w-full py-4 px-8 leading-none text-white
                  bg-blue-500 hover:bg-blue-600 rounded-xl tracking-wide
                  md:rounded-l-none"
                  class:cursor-not-allowed={!isValidEmail}
                  disabled={!isValidEmail}
                  on:click|preventDefault={setEmail}>
                  Subscribe
                </button>
              </div>

              <p
                class="text-red-500 text-sm italic mt-1"
                class:hidden={isValidEmail || !touched.email}>
                Please enter a valid email
              </p>
            </div>

          </form>
        </div>
        <!-- {/if} -->

        {#if subscribed}
          <p class="text-green-500 text-sm italic mt-1" transition:fade>
            You have successfully subscribed to our newsletter.
          </p>
        {/if}

      </div>
    </div>
  </div>

  <div class="flex flex-wrap py-12 px-4 text-center text-white">

    <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading">
      <h3 class="md:text-lg text-lg">
        <span class="md:text-3xl text-2xl font-medium">10,000</span>
        <br />
        community members
      </h3>
    </div>

    <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading ">
      <h3 class="md:text-lg text-lg">
        <span class="md:text-3xl text-2xl font-medium">$7,500</span>
        <br />
        traded
      </h3>
    </div>

    <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading ">
      <h3 class="md:text-lg text-lg">
        <span class="md:text-3xl text-2xl font-medium">$45,000</span>
        <br />
        leveraged impact
      </h3>
    </div>
  </div>

</section>
