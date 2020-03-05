<script>

const questions = [
    {
      id: 1,
      question: "Where does my donation go?",
      answer:
        "Your donation is converted into cryptocurrency and securely stored in a smart contract on the Ethereum blockchain. This storage is the community currencies reserve, backing the credit tokens created to give to your donee. After a few minutes, your donee receives the currency tokens in their blockchain wallet and is able to spend them. Meanwhile you can track your donation’s impact in your impact dashboard.",
      isOpened: true
    },
    {
      id: 2,
      question:
        "So I give $1, how much community currency does a donee receive?",
      answer:
        "Similar to how a central bank aims to keep a steady interest rate, Sarafu targets a reserve ratio of 25% reserve currency / community credit tokens. This means that there is a variable exchange rate between USD and the community currency. You can few the exchange rate in our exchange panel.",
      isOpened: false
    },
    {
      id: 3,
      question:
        "Why blockchain?",
      answer:
        "Blockchain technology lets anyone become a financial service provider, issuing credit and redeeming it for national currency or commodities, all while being totally transparent to any supervision. This means that for a tabletop bank, microfinance or traditional bank the risk of credit issuance can be regulated in real-time and insurance systems can be scaled down to the size of a 25 women savings and loaning group in the communities we work with.",
      isOpened: false
    },
    {
      id: 4,
      question:
        "How are new tokens issued?",
      answer:
        "Each of our community currency partners regularly issues new tokens to the system to support healthy network growth. For example, Grassroots Economics acts as central bank to the Sarafu system and issues community currency on a set of rules, which are reflected in their donation campaigns. In general, new credit aims to reward those who have proven importance to the network and will drive local economic growth. Specific issuance rules can range from supporting a school in need of material, a universal basic income for every network member, or a rule to rewarding individual members who are central to develop new connections on the edge of the network.",
      isOpened: false
    }
  ];

	function switchOpened(id) {
	    console.log("here");
	    const question = questions.find(q => q.id === id);
	    question.isOpened = !question.isOpened;
	    question = question;
	    console.log("isOpened: ", question.isOpened);
	  }

/*
	import { fade } from 'svelte/transition';
	let visible = false;
  let plusOrMinus = "+";
  function switchVisibility() {
		visible =! visible;
	}*/
</script>

<section id="frequently-asked-questions" class="py-12 px-4">
  <div class="max-w-3xl mx-auto">
    <h2
      class="md:text-3xl text-4xl mb-2 leading-tight font-heading text-center">
      Frequently Asked Questions
    </h2>
		{#each questions as question}
      <div class="p-4 mb-2 border-b">
        <button
          class="flex items-center w-full text-left focus:outline-none"
          on:click={() => switchOpened(question.id)}>
          <span class="text-2xl mr-4">+</span>
          <span class="flex-grow font-semibold">{question.question}</span>
        </button>
        {#if question.isOpened}
          <p class="mt-2">{question.answer}</p>
        {/if}
      </div>
    {/each}

  </div>
</section>
