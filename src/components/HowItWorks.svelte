<script>
  import { fly } from "svelte/transition";
  let faq = [
    {
      id: 1,
      question: "1. You donate to a campaign",
      answer:
        "Choose a campaign you want to support. You can donate in US Dollars, Euro or cryptocurrency like Ether or DAI",
      img:
        "donate.jpg",
      isOpened: true
    },
    {
      id: 2,
      question:
        "2. We convert the currencies",
      answer:
        "Your donation triggers the issuance of local currency tokens on the Ethereum blockchain, instantly accessible on the receivers phone",
      img:
        "convert.jpg",
      isOpened: false
    },
    {
      id: 3,
      question:
        "3. You track the impact",
      answer:
        "Check the impact of your donation in our dashboard. Stay in contact with your donees, and track the impact on your dashboard",
      img:
        "track.jpg",
      isOpened: false
    }
  ];

  function toggleFaq(id) {
    let question = faq.find(q => q.id === id);
    let otherQuestions = faq.forEach((item) => item.isOpened = false)
    question.isOpened = true;
    const index = faq.findIndex(q => q.id === id);
    faq[index] = question;
  }
</script>

<section id="how-it-works" class="py-16 px-4 text-center">

<h2 class="md:text-3xl text-4xl mb-2 leading-tight font-heading text-left">How we leverage your donation</h2>

  <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">

    {#each faq as question}
      {#if question.isOpened}
        <div class="lg:w-1/2 px-2"><img src="images/how-it-works/{question.img}" alt=""></div>
        <!--<div class="lg:w-1/2 px-2" transition:fly={{ y: -20, delay: 60, duration: 240 }}><img src="images/{question.img}" alt=""></div>-->
      {/if}
    {/each}
    <div class="lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0">
      <!--<h2 class="md:text-3xl text-4xl mb-4 leading-tight font-heading">How we leverage your donation</h2>-->

      {#each faq as question}
          <div class="p-4 mb-4 rounded hover:shadow-lg" on:click={() => toggleFaq(question.id)}>
            <h3 class="text-2xl mb-2 font-heading">{question.question}</h3>
            <p class="text-gray-500 leading-relaxed">{question.answer}</p>
          </div>
      {/each}

    </div>

  </div>

  <!--<div class="flex flex-wrap items-center -mx-8 mt-12 mb-2">
    <div class="lg:w-1/3 px-8 mb-8">
      <img class="w-1/3 mx-auto mb-8" src="images/1.svg" alt="" />
      <h3 class="text-2xl mb-4 font-heading">
        <span
          class="inline-flex items-center justify-center h-12 w-12 mr-2 border
          rounded-full">
          1
        </span>
        <span>Donate to a Campaign</span>
      </h3>
      <p class="text-gray-500">
        Choose a campaign you want to support. You can donate in US Dollars, Euro or cryptocurrency like Ether or DAI.
        <br />
      </p>
    </div>

    <div class="lg:w-1/3 px-8 mb-8">
      <img class="w-1/3 mx-auto mb-8" src="images/2.svg" alt="" />
      <h3 class="text-2xl mb-4 font-heading">
        <span
          class="inline-flex items-center justify-center h-12 w-12 mr-2 border
          rounded-full">
          2
        </span>
        <span>Convert the Currencies</span>
      </h3>
      <p class="text-gray-500">
        Your donation triggers the issuance of local currency tokens on the Ethereum blockchain, instantly accessible on the receivers phone.
      </p>
    </div>

    <div class="lg:w-1/3 px-8 mb-8">
      <img class="w-1/3 mx-auto mb-8" src="images/3.svg" alt="" />
      <h3 class="text-2xl mb-4 font-heading">
        <span
          class="inline-flex items-center justify-center h-12 w-12 mr-2 border
          rounded-full">
          3
        </span>
        <span>Track the Impact</span>
      </h3>
      <p class="text-gray-500">
      Check the impact of your donation in our dashboard. Stay in contact with your donees, and track the impact on your dashboard.
      </p>
    </div>
  </div>-->

</section>
