<script>
  export let project;
  import { communities } from "../stores/communities.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function getCommunityProjects(community) {
    let projectsArr = [];
    Object.entries(community.projects).forEach(([key, value]) => {
      projectsArr.push({ ...value, id: key });
    });
    return projectsArr;
  }

  const projectBelongsTo = (communityId, projectId) => {
    for (let community of $communities) {
      if (community.id === communityId) {
        for (let project of getCommunityProjects(community)) {
          if (project.id === projectId) {
            return true;
          }
        }
      }
    }
    return false;
  };

  function toggleTable() {
    project.dataTableActive = !project.dataTableActive;
  }
</script>

<section
  class="text-center bg-cover h-full"
  style="background-image: url({project.imageUrl})">

  <div class="relative flex items-center py-12 md:py-24 lg:py-32">
    <div class="absolute bg-black opacity-50 inset-0" />
    <div class="z-10 max-w-2xl mx-auto">
      <h1
        class="text-3xl md:text-5xl mb-2 leading-tight font-heading text-white">
        {project.name}
      </h1>
      <p class="px-4 mb-2 text-gray-400 leading-relaxed">
        {project.shortDescription}
      </p>

      <div class="max-w-3xl mx-auto my-8 text-center">
        <button
          class="h-full w-5/12 inline-block p-4 mx-2 text-white bg-blue-500
          hover:bg-blue-600 rounded shadow-xl hover:shadow-2xl
          focus:outline-none"
          on:click={() => dispatch('fundwithcrypto')}>
          Fund with crypto
        </button>
        <button
          class="h-full w-5/12 inline-block p-4 mx-2 text-white bg-green-500
          hover:bg-green-600 rounded shadow-xl hover:shadow-2xl
          focus:outline-none"
          on:click={() => dispatch('fundwithcard')}>
          Fund with card
        </button>
      </div>
    </div>
  </div>

</section>

<div class="container mx-auto px-4">



  {#if !project.descriptionHtml}
    <article class="mb-12 p-4">
      <h2 class="my-12 text-4xl text-center font-heading font-semibold">
        About the project
      </h2>

      <div class="max-w-3xl mx-auto">
        <p class="pb-8">{project.description}</p>

        <img class="w-1/2 pb-8 mx-auto" src={project.infoImage0} alt="" />

        <p class="pb-8">{project.infoText1}</p>

        <img class="w-1/2 pb-8 mx-auto" src={project.infoImage1} alt="" />

        <p class="pb-8">{project.infoText2}</p>

        <img class="w-1/2 pb-8 mx-auto" src={project.infoImage2} alt="" />

        <p class="pb-8">{project.infoText3}</p>
      </div>
    </article>

    {#if projectBelongsTo('a-kenya-nairobi-sarafu-community-currency', project.id)}
      <section class="p-8 lg:p-16">
        <h2 class="my-6 text-4xl text-center font-heading font-semibold">
          This campaign's impact
        </h2>

        <div
          class="flex flex-wrap text-center justify-center z-10 max-w-2xl mx-auto ">
          <p class="leading-relaxed mx-auto mb-4">
            See how your contributions improved our community members lives over
            the last 30 days.
          </p>

          <div class="flex flex-row w-full mt-4">

            <div class="flex flex-col w-1/2">
              <a
                href="https://dashboard.sarafu.network/"
                target="_blank">
                <img class="pb-8 mx-auto zoom" src="images/statistics-dashboard.svg" alt="" />

                <p>Open our blockchain insights dashboard.</p>

              </a>
            </div>
            <div class="flex flex-col w-1/2">
                <img on:click={() => toggleTable()} class="cursor-pointer pb-8 mx-auto zoom" src="images/statistics-table.svg" alt="" />

                <p>Or view the raw user data for this campaign.</p>

            </div>
          </div>

        </div>

      </section>
    {/if}

    {#if project.dataTableActive}
      <section class="p-1 md:p-8 lg:p-16 xl:p-16 mx-auto">
        <h2 class="my-12 text-4xl text-center font-heading font-semibold">
          Transaction and user insights for this campaign, from the blockchain
        </h2>
        <table class="table-auto mx-auto">
          <thead>
            <tr>
              <th class="px-4 py-2 hidden lg:table-cell">xDAI address</th>
              <th class="px-4 py-2 hidden lg:table-cell">Current Balance</th>
              <th class="px-4 py-2 hidden lg:table-cell">Tx received</th>
              <th class="px-4 py-2 hidden lg:table-cell">Tx volume received</th>
            </tr>
          </thead>
          <tbody>
            {#each project.users as user}
              <tr
                class="hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row
                flex-wrap lg:flex-no-wrap">
                <td
                  class="w-full bg-gray-700 text-white text-xs md:bg-white
                  md:text-black md:text-base lg:bg-white lg:text-black
                  lg:text-base xl:bg-white xl:text-black xl:text-base
                  hover:underline lg:w-auto py-6 px-3 md:p-3 lg:p-3 xl:p-3
                  text-center border border-b block lg:table-cell relative
                  lg:static">
                  <a
                    href="https://blockscout.com/poa/xdai/address/{user.xdaiAddress}"
                    target="_blank">
                    <span
                      class="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs
                      font-bold uppercase">
                      Address
                    </span>
                    {user.xdaiAddress}
                  </a>
                </td>
                <td
                  class="w-full lg:w-auto p-3 text-gray-800 text-center border
                  border-b block lg:table-cell relative lg:static">
                  <span
                    class="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs
                    font-bold uppercase">
                    Current Balance
                  </span>
                  {user.balance}
                </td>
                <td
                  class="w-full lg:w-auto p-3 text-gray-800 text-center border
                  border-b block lg:table-cell relative lg:static">
                  <span
                    class="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs
                    font-bold uppercase">
                    Tx received
                  </span>
                  {user.txReceived}
                </td>
                <td
                  class="w-full lg:w-auto p-3 text-gray-800 text-center border
                  border-b block lg:table-cell relative lg:static">
                  <span
                    class="lg:hidden absolute top-0 left-0 px-2 py-1 text-xs
                    font-bold uppercase">
                    Tx volume received
                  </span>
                  {user.volumeReceived}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </section>
    {/if}
  {:else}
    <article class="mb-12 p-4">
      <div class="max-w-3xl mx-auto">
        {@html project.descriptionHtml}
      </div>
    </article>
  {/if}



</div>
