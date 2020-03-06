<script>
  import { fly } from "svelte/transition";
  let faq = [
    {
      id: "1",
      question: "Where does my donation go?",
      answer:
        "Your donation is converted into cryptocurrency and securely stored in a smart contract on the Ethereum blockchain. This storage is the community currencies reserve, backing the credit tokens created to give to your donee. After a few minutes, your donee receives the currency tokens in their blockchain wallet and is able to spend them. Meanwhile you can track your donation’s impact in your impact dashboard.",
      isOpened: false
    },
    {
      id: "2",
      question:
        "So I give $1, how much community currency does a donee receive?",
      answer:
        "Similar to how a central bank aims to keep a steady interest rate, Sarafu targets a reserve ratio of 25% reserve currency / community credit tokens. This means that there is a variable exchange rate between USD and the community currency. You can few the exchange rate in our exchange panel.",
      isOpened: false
    }
  ];

  function toggleFaq(id) {
    let question = faq.find(q => q.id === id);
    question.isOpened = !question.isOpened;
    const index = faq.findIndex(q => q.id === id);
    faq[index] = question;
  }
</script>

<section class="py-8 px-4">
  <div class="max-w-3xl mx-auto">
    <h2
      class="md:text-3xl text-4xl mb-4 leading-tight font-heading text-center">
      Frequently Asked Questions
    </h2>

    {#each faq as question}
      <div class="p-4 mb-2 border-b">
        <div
          class="flex items-center w-full text-left focus:outline-none"
          on:click={() => toggleFaq(question.id)}>
          <span class="text-2xl mr-4">{question.isOpened ? '-' : '+'}</span>
          <span class="flex-grow font-semibold">{question.question}</span>
        </div>
        {#if question.isOpened}
          <p class="mt-2" transition:fly={{ y: -20, delay: 60, duration: 240 }}>
            {question.answer}
          </p>
        {/if}
      </div>
    {/each}

  </div>
</section>
