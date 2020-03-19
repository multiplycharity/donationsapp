<script>
  import { fly } from "svelte/transition";
  let faq = [
    {
      id: 1,
      question: "Where does my donation go?",
      answer:
        "Your donation is converted into cryptocurrency and securely stored in a smart contract on the Ethereum blockchain. This storage is the community currencies reserve, backing the credit tokens created to give to your donee. After a few minutes, your donee receives the currency tokens in their blockchain wallet and is able to spend them. Meanwhile you can track your donation’s impact in your impact dashboard.",
      isOpened: false
    },
    {
      id: 2,
      question:
        "So I give $1, how much community currency does a donee receive?",
      answer:
        "Similar to how a central bank aims to keep a steady interest rate, Sarafu targets a reserve ratio of 25% reserve currency / community credit tokens. This means that there is a variable exchange rate between USD and the community currency. You can view the exchange rate in our exchange panel.",
      isOpened: false
    },
    {
      id: 3,
      question:
        "Why blockchain?",
      answer:
        "Blockchain technology lets anyone become a financial service provider, issuing credit and redeeming it for national currency or commodities, all while being totally transparent to any supervision. This means that for a tabletop bank, microfinance or traditional bank the risk of credit issuance can be regulated in real-time and insurance systems can be scaled down to the size of a 25 women savings and loaning group in the communities we work with. The reality is that these communities actually use blockchain technology to pay for goods and services. Today, it is one of the largest use cases for blockchain technology. Though they don’t use ETH or DAI, but a token which only is spendable in their local economy. Token economics can be encoded in an Ethereum smart contract. This means that the token price could fluctuate, while being exchangeable on an uniswap-like curve, or its price could be pegged to the USD, to be interoperable with surrounding ecosystems - imagine MakerDAO-like system issuing the tokens.",
      isOpened: false
    },
    {
      id: 4,
      question:
        "How are new tokens issued?",
      answer:
        "Each of our community currency partners regularly issues new tokens to the system to support healthy network growth. For example, Grassroots Economics acts as central bank to the Sarafu system and issues community currency on a set of rules, which are reflected in their donation campaigns. In general, new credit aims to reward those who have proven importance to the network and will drive local economic growth. Specific issuance rules can range from supporting a school in need of material, a universal basic income for every network member, or a rule to rewarding individual members who are central to develop new connections on the edge of the network.",
      isOpened: false
    },
    {
      id: 5,
      question:
        "How do you leverage donations?",
      answer:
        "Your donation is converted into USD cryptocurrency and safely stored in a reserve smart contract. Next, community credit tokens are issued to your campaign, equal in value to the amount you donated. The receivers can instantly access the funds on their phone and exchange them for goods or services in the local economy. Now, while cash donations, eg. via GiveDirectly or the Red Cross, would leave the local economy again rather quickly, community currencies build a resilient cycle, keeping liquidity in the network. This especially helps the ones in need for credit, eg. creating more jobs for young people or attracting and retaining teachers. Community currencies could also help plug a shortfall in credit needed by small and medium businesses in the developing world, estimated by the World Bank at $2.6 trillion. We hope we can break the chronic cycle of the Red Cross giving aid every three years because it’s not building communities up.",
      isOpened: false
    },
    {
      id: 6,
      question:
        "How does issuing community currency compare to an ICO?",
      answer:
        "Token issuance is a huge problem in cryptocurrency research. How many tokens to initial distribute? How many to fairly airdrop later? How to reach the right target group, beyond existing crypto users? How to make sure that people don't immediately sell received tokens on exchanges, but put them to use in the system? How can users participate in the system’s governance? And these are not just research problems, but 2017’s ICO craze at least served as an experiment to showcase the difficulties with issuing blockchain tokens. Now, DAOs try to solve it, but they are only adopted in core blockchain circles. We turn the problem around, and start with the actual existing economical ecosystem, which already uses blockchain to trade goods and services. Members of a network can verify their identity by their trading connections without a central identifier, and issuance is done on the basis of economic impact metrics.",
      isOpened: false
    },
    {
      id: 7,
      question:
        "How do you prove a donation’s impact?",
      answer:
        "Running the economy on a transparent blockchain ledger gives us access to a lot of payment data. Additionally we encourage users to tag transactions with the traded item. Since we also know when and where the donated tokens are issued, we can follow their path, see what their users trade and how their consumption changes over time. We can now look at different measures of impact. From the individual user level, to the whole economy. A simple example is the improved spending power of individuals over time. If we want to look at donation’s impact on the whole economy, we can analyze how long tokens stay in the economy, how much volume is traded in that period, and compare it to cash donations from platforms like GiveDirectly. We also use official UN SDG indicators to measure impact.",
      isOpened: false
    },
    {
      id: 8,
      question:
        "Why should individuals use community currency? Isn’t blockchain complicated?",
      answer:
        "Do you like to get free money? I bet you do. Now what if the free money simply replaces your credit infrastructure of bad banks which keep crashing and local loan groups which keep loans stored on paper in a locked box, with a simple phone banking interface? Incentivizing users to switch to community currency is not hard, once they experience the benefits. Similarly, accepting community currency as a business is a risk in the start, just like taking IOU credit from friends as payments has its risks. Though with time, businesses learn to use the credit to pay for their consumption. And there is always the option to exchange community currency back into national currency. To reduce risks, we take precautions and build on an open technology stack. We are further working on improving the user experience and reward participation.",
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

<section id="faq" class="py-16 px-4">
  <div class="flex flex-wrap -mx-2">
    <div class="lg:w-2/5 px-2 lg:pr-16 mb-6 lg:mb-0">
      <h2 class="md:text-3xl text-4xl mb-2 leading-tight font-heading">
        Frequently Asked Questions
      </h2>
    </div>


    <div class="lg:w-3/5 px-2">
      {#each faq as question}
        <div class="p-4 mb-2 border-b">
          <div
            class="flex items-center w-full text-left focus:outline-none"
            on:click={() => toggleFaq(question.id)}>
            <span class="text-2xl mr-4">{question.isOpened ? '-' : '+'}</span>
            <span class="flex-grow font-semibold">{question.question}</span>
          </div>
          {#if question.isOpened}
            <p class="mt-2" transition:fly={{ y: -20, duration: 240 }}>
              {question.answer}
            </p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
