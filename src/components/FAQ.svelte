<script>
	import { fade } from 'svelte/transition';
	let visible = false;
  let plusOrMinus = "+";
  function switchVisibility() {
		visible =! visible;
	}
</script>

<section id="frequently-asked-questions" class="py-12 px-4">
  <div class="max-w-3xl mx-auto">
    <h2 class="md:text-3xl text-4xl mb-2 leading-tight font-heading text-center">Frequently Asked Questions</h2>
    <div class="p-4 mb-2 border-b">
      <button class="flex items-center w-full text-left focus:outline-none"><span class="text-2xl mr-4">{plusOrMinus}</span>
        <span class="flex-grow font-semibold" on:click="{switchVisibility}">Where does my donation go?</span>
      </button>
      {#if visible}
      <p class="mt-2" transition:fade>Your donation is converted into cryptocurrency and securely stored in a smart contract on the Ethereum blockchain. This storage is the community currencies reserve, backing the credit tokens created to give to your donee. After a few minutes, your donee receives the currency tokens in their blockchain wallet and is able to spend them. Meanwhile you can track your donation’s impact in your impact dashboard.</p>
      {/if}
    </div>
    <div class="p-4 mb-2 border-b">
      <button class="flex items-center w-full text-left focus:outline-none"><span class="text-2xl mr-4">{plusOrMinus}</span>
        <span class="flex-grow font-semibold" on:click={switchVisibility}>So I give $1, how much community currency does a donee receive?</span>
      </button>
      {#if visible}
      <p class="mt-2" transition:fade>Similar to how a central bank aims to keep a steady interest rate, Sarafu targets a reserve ratio of 25% reserve currency / community credit tokens. This means that there is a variable exchange rate between USD and the community currency. You can few the exchange rate in our exchange panel.</p>
      {/if}
    </div>
  </div>
</section>
