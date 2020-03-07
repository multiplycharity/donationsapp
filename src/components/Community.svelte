<script>
  export let community;
</script>

<!--<section
  class="bg-cover h-full py-8 px-4 text-white"
  style="background-image: url({community.imageUrl})">-->
  <section
    class="bg-cover h-full py-8 px-4"
    style="background-image: url(images/Frame_55.jpg)">


  <div class="relative items-center py-10 md:py-12 lg:py-14 container mx-auto px-4">

    <!--<h2 class="text-4xl lg:w-1/2 mb-10" data-config-id="header">{community.name}</h2>-->

    <div class="flex flex-wrap">
      <div class="lg:w-1/2 mb-6 lg:mb-0">
        <div>
          <div class="text-4xl py-2 px-6 mb-6 lg:mb-0">
            <h2 class="leading-relaxed">{community.name}</h2>
          </div>
          <div class="py-2 px-6 mb-6 lg:mb-0">
            <p class="leading-relaxed">{community.description}</p>
          </div>
          <div class="py-2 px-6">
            <p class="leading-relaxed">{community.descriptiontwo}</p>
          </div>
          <div class="py-2 px-6">
          <div class="flex flex-wrap -mx-4 text-center">

            <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading">
              <h3 class="md:text-lg text-lg">
                <span class="md:text-xl text-xl font-medium">$23,000</span>
                <br />
                traded
              </h3>
            </div>

            <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading md:border-l">
              <h3 class="md:text-lg text-lg">
                <span class="md:text-xl text-xl font-medium">3x velocity</span>
                <br />
                vs USD
              </h3>
            </div>

            <div class="w-full md:w-1/3 p-4 mb-4 md:mb-0 mb-5 font-heading md:border-l">
              <h3 class="md:text-lg text-lg">
                <span class="md:text-xl text-xl font-medium">6x impact</span>
                <br />
                vs GiveDirectly
              </h3>
            </div>

          </div>
          </div>
        </div>
      </div>
      <!--<div class="lg:w-1/4 lg:ml-16 text-gray-500">
        <p>[statistics].</p>
      </div>-->
      <div class="lg:w-1/2 px-2">
        <img src="images/kenya_mapbox.png" alt="" />
        <!--<Map lat={35} lon={-84} zoom={3.5}>
        	<MapMarker lat={37.8225} lon={-122.0024} label="Svelte Body Shaping"/>
        	<MapMarker lat={33.8981} lon={-118.4169} label="Svelte Barbershop & Essentials"/>
        	<MapMarker lat={29.7230} lon={-95.4189} label="Svelte Waxing Studio"/>
        	<MapMarker lat={28.3378} lon={-81.3966} label="Svelte 30 Nutritional Consultants"/>
        	<MapMarker lat={40.6483} lon={-74.0237} label="Svelte Brands LLC"/>
        	<MapMarker lat={40.6986} lon={-74.4100} label="Svelte Medical Systems"/>
        </Map>-->
      </div>
    </div>

  </div>
</section>
