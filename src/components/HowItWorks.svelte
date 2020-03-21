<script>
  import { fly } from "svelte/transition";
  let faq = [
    {
      id: 1,
      question: "1. Funding the campaign",
      answer:
        "All donations, in USD and cryptocurrency, are converted into dollar tokens and safely stored in the community reserve on the Ethereum blockchain. Using the reserve as collateral, community currency credit is automatically issued on each donation.",
      img: "community-currency-reserve.jpg",
      link: "/communities/a-kenya-nairobi-sarafu-community-currency",
      linktext: "Browse our campaigns",
      externallink: false,
      isOpened: true
    },
    {
      id: 2,
      question: "2. Resilient community credit",
      answer: "The issued community tokens now are sent to receivers phones, where they can be used to buy goods & services. While cash donations leave the economy to pay foreign development, our credit tokens stay in the local economy, boosting local business sustainably.",
      img: "community-currency-app.jpg",
      link: "https://www.grassrootseconomics.org/single-post/2018/03/14/Universal-Basic-Income-via-Community-Currencies",
      linktext: "Read more about community currencies",
      externallink: true,
      isOpened: false
    },
    {
      id: 3,
      question: "3. Live impact insights",
      answer: "Leveraging donations into community credit thus result in a larger impact on the causes donated to. And finally we can monitor this impact, thanks to the transparency of blockchain transactions.",
      img: "community-currency-network.jpg",
      link: "https://www.grassrootseconomics.org/single-post/people-behind-txs",
      linktext: "Read more about impact metrics",
      externallink: true,
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

  async function goToLink() {
    await goto(`${link}`);
  }
</script>

<section id="how-it-works" class="py-16 px-4">

  <!--<h2 class="md:text-3xl text-4xl mb-2 leading-tight font-heading text-left">
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

  </div>-->

  <h2 class="md:text-3xl text-4xl mb-6 xl:mb-2 lg:mb-2 leading-tight font-heading">How we leverage your donation's impact</h2>
  {#each faq as question}
  <div>
    <div class="flex flex-wrap items-center text-left">

      <div class="md:w-1/2 mb-8 xl:mx-8 lg:mx-8 md:mx-8">
        <h3 class="text-2xl mb-3 font-heading">{question.question}</h3>
        <p class="text-gray-500 leading-relaxed mb-2">{question.answer}</p>
        {#if question.externallink == true}
          <a href={question.link} target="_blank">
            <p class="text-blue-500 leading-relaxed">{question.linktext}</p>
          </a>
        {:else}
          <a href={question.link}>
            <p class="text-blue-500 leading-relaxed">{question.linktext}</p>
          </a>
        {/if}
      </div>

      <div class="md:w-2/5 mb-8 py-4">
        <img class="w-4/5 mx-auto" src="images/how-it-works/{question.img}" alt="">
      </div>

    </div>
  </div>
  {/each}

</section>
