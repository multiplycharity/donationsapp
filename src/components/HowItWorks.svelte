<script>
  import { fly } from "svelte/transition";
  let faq = [
    {
      id: 1,
      question: "1. You donate to a campaign",
      answer:
        "Choose a campaign you want to support. You can donate in US Dollars, Euro or cryptocurrency like Ether or DAI",
      img: "community-currency-reserve.jpg",
      isOpened: true
    },
    {
      id: 2,
      question: "2. We convert the currencies",
      answer:
        "Your donation triggers the issuance of local currency tokens on the Ethereum blockchain, instantly accessible on the receivers phone",
      img: "community-currency-app.jpg",
      isOpened: false
    },
    {
      id: 3,
      question: "3. You track the impact",
      answer:
        "Check the impact of your donation in our dashboard. Stay in contact with your donees, and track the impact on your dashboard",
      img: "community-currency-network.jpg",
      isOpened: false
    }
  ];

  function toggleFaq(id) {
    let question = faq.find(q => q.id === id);
    let otherQuestions = faq.forEach(item => (item.isOpened = false));
    question.isOpened = true;
    const index = faq.findIndex(q => q.id === id);
    faq[index] = question;
  }
</script>

<section id="how-it-works" class="py-16 px-4 text-center">

  <h2 class="md:text-3xl text-4xl mb-2 leading-tight font-heading text-left">
    How we leverage your donation
  </h2>

  <div
    class="flex flex-wrap items-center text-center lg:text-left -mx-2 h-full">

    {#each faq as question}
      {#if question.isOpened}
        <div class="lg:w-1/2 h-full px-2">
          <img
            src="images/how-it-works/{question.img}"
            alt=""
            class="bg-cover rounded-xl" />
        </div>
      {/if}
    {/each}
    <div class="lg:w-1/2 px-2 lg:pl-16 lg:mt-0">

      {#each faq as question}
        <div class="p-4 mb-1" on:click={() => toggleFaq(question.id)}>
          <h3 class="text-2xl mb-2 font-heading">{question.question}</h3>
          <p class="text-gray-500 leading-relaxed">{question.answer}</p>
        </div>
      {/each}

    </div>

  </div>

</section>
