<script>
  export let community;
</script>

<section
  class="text-center bg-cover h-full"
  style="background-image: url({community.imageUrl})">
  <div class="relative flex items-center py-32">
    <div class="absolute bg-black opacity-50 inset-0" />
    <div class="z-10 max-w-2xl mx-auto">
      <h2
        class="text-5xl mb-8 leading-tight font-heading text-white"
        data-config-id="header">
        {community.name}
      </h2>

    </div>
  </div>
</section>
