<script>
  export let community;
</script>

<!--<section
  class="bg-cover h-full py-8 px-4 text-white"
  style="background-image: url({community.imageUrl})">-->
<section
  class="bg-cover h-full py-8 px-4 text-white"
  style="background-image: url(images/Frame_103.png)">

  <div
    class="relative items-center py-10 md:py-12 lg:py-14 container mx-auto px-4">

    <!--<h2 class="text-4xl lg:w-1/2 mb-10" data-config-id="header">{community.name}</h2>-->
    <h2
      class="md:text-3xl text-4xl px-6 mb-2 leading-tight font-heading text-left
      font-semibold">
      {community.name}
    </h2>
    <div class="flex flex-wrap font-medium">

      <div class="lg:w-1/2 mb-6 lg:mb-0">
        <div>

          <div class="py-2 px-6 mb-6 lg:mb-0">
            <p class="leading-relaxed">{community.description}</p>
          </div>
          <div class="py-2 px-6">
            <p class="leading-relaxed">{community.descriptiontwo}</p>
          </div>
          <div class="py-2 px-6">

            <div class="flex flex-wrap -mx-4 text-center ">

              <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading">
                <h3 class="md:text-lg text-lg">
                  <span class="md:text-xl text-xl font-medium">$23,000</span>
                  <br />
                  traded
                </h3>
              </div>

              <div
                class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading
                md:border-l">
                <h3 class="md:text-lg text-lg">
                  <span class="md:text-xl text-xl font-medium">
                    3x velocity
                  </span>
                  <br />
                  vs USD
                </h3>
              </div>

              <div
                class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading
                md:border-l">
                <h3 class="md:text-lg text-lg">
                  <span class="md:text-xl text-xl font-medium">2x+ impact</span>
                  <br />
                  vs GiveDirectly
                </h3>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="lg:w-1/2 px-2 pt-2">
        <img
          src="images/kenya_mapbox.png"
          alt=""
          class="rounded-xl shadow-2xl" />

      </div>
    </div>

  </div>

</section>
