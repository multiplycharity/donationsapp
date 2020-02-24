<script>
  export let project;
</script>

<!-- first header option -->
<section
  class="text-center bg-cover h-full shadow-2xl rounded-lg overflow-hidden"
  style="background-image: url({project.imageUrl})">
  <div class="relative flex items-center py-32">
    <div class="absolute bg-black opacity-50 inset-0" />
    <div class="z-10 max-w-2xl mx-auto">
      <h2
        class="text-5xl mb-8 leading-tight font-heading text-white"
        data-config-id="header">
        {project.name}
      </h2>
    </div>
  </div>
</section>

<!-- second header option -->
<section class="py-12 px-4"><div class="flex flex-wrap -mx-4">
    <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
      <div class="flex flex-col h-full p-8 bg-gray-200 rounded">
        <h2 class="text-3xl font-heading">The Lagos School</h2>
        <p class="max-w-sm mt-auto mb-8 text-gray-500 leading-relaxed">Fund the next year of teaching kids the basics of adult life. Thanks</p><a class="text-right text-blue-700 hover:underline" href="#">Donate</a>
      </div>
    </div>
    <div class="lg:w-1/2 px-4">
      <div class="flex flex-wrap -m-2">
        <div class="w-1/2 p-2"><img class="rounded shadow-md" src="images/Frame_47.jpg" alt=""></div>
        <div class="w-1/2 p-2"><img class="rounded shadow-md" src="images/Frame_47.jpg" alt=""></div>
        <div class="w-1/2 p-2"><img class="rounded shadow-md" src="images/Frame_43.jpg" alt=""></div>
        <div class="w-1/2 p-2"><img class="rounded shadow-md" src="images/Frame_47.jpg" alt=""></div>
      </div>
    </div>
  </div>
</section>

<section class="p-4"><div class="flex flex-wrap -mx-4">
    <div class="md:w-1/4 p-4 mb-4 md:mb-0"><img src="icons/shield.svg" alt=""><h3 class="text-xl my-2 font-heading">33 kids financed</h3>
      <!--<p class="text-gray-500 leading-relaxed">Forget about paper jams with our increased stability product.</p>-->
    </div>
    <div class="md:w-1/4 p-4 mb-4 md:mb-0"><img src="icons/cloud-tools.svg" alt=""><h3 class="text-xl my-2 font-heading">12 teachers yearly salary paid</h3>
      <!--<p class="text-gray-500 leading-relaxed">Multi-functional paper for various office needs.</p>-->
    </div>
    <div class="md:w-1/4 p-4 mb-4 md:mb-0"><img src="icons/cart.svg" alt=""><h3 class="text-xl my-2 font-heading">2 repaired buildings</h3>
      <!--<p class="text-gray-500 leading-relaxed">The best combination of quality and economy comes with our paper.</p>-->
    </div>
    <div class="md:w-1/4 p-4 mb-4 md:mb-0"><img src="icons/server.svg" alt=""><h3 class="text-xl my-2 font-heading">23 happy parents</h3>
      <!--<p class="text-gray-500 leading-relaxed">The offer includes paper in wide range of density and sizes.</p>-->
    </div>
  </div>
</section>

<article class="py-12 px-4"><h1 class="text-4xl text-center font-heading font-semibold">About the School</h1>
  <!--<p class="text-center"><span>October 22, by</span><a class="ml-1 text-blue-700 hover:underline" href="#">Michael Scott</a></p>-->
  <div class="my-10"><img src="placeholders/pictures/work.jpg" alt="" class="hidden"></div>
  <div class="max-w-3xl mx-auto">
    <p class="mb-4">Ndegwa supports his family of seven by selling peas and chicken to the community in Miyani. He has gained more customers since he started using the Sarafu service and expects that by charging Sarfu users only half of the amount in Kenyan Shillings (and the other half in Sarafu) he can provide greater access to his products. Sarafu, he says, assists him in saving Keyan Shillings for other investments beyond his daily consumption.</p>
    <p class="mb-4">We&rsquo;re dedicated to ensure the highest level of customer satisfaction based on long-term professional relationships. By creating the positive working environment we&rsquo;re enabling our employees to significantly improve not only their productivity, but what&rsquo;s more important &ndash; job satisfaction.</p>
    <ul class="mb-4 list-inside list-disc"><li>High durability</li>
      <li>Value-based price</li>
      <li>Perfect performance on copy machines</li>
      <li>Long lasting whiteness</li>
    </ul><p class="mb-10">We deliver our services with passion and dedication unmatched by other so called &ldquo;big players&rdquo;. We create a friendly environment for our workers and that&rsquo;s what makes their dedication soar to the maximum. You are getting not only the best possible product, but also our love for paper (completely free of charge).</p>
    <blockquote class="text-center mb-10">
      <p class="text-lg font-semibold mb-2">"I would say I kind of have an unfair advantage, because I watch reality dating shows like a hawk, and I learn. I absorb information from the strategies of the winners and the losers. Actually, I probably learn more from the losers."</p>
      <footer class="text-gray-500">Michael Scott</footer></blockquote>
    <p>Because the real business is done on paper.</p>
  </div>
</article>

<section class="py-12 px-4"><div class="max-w-3xl mx-auto text-center">
    <h2 class="text-3xl mb-1">So how does it work?</h2>
    <p class="mb-8 text-gray-500">Donating to the school</p>
    <div class="relative" style="padding-bottom: 56.25%"><iframe src="https://www.youtube-nocookie.com/embed/8Z0chJBibhY" frameborder="0" class="absolute w-full h-full" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
  </div>
</section>
