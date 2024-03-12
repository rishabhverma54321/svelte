<script>
    import "../home/styles/index.pcss"
    export let data;
</script>
<section class="px-2 relative journy-section w-full max-md:pr-5 max-md:max-w-full">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <aside class="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
        <div class="flex grow gap-5 max-md:mt-8">
          <div class="flex flex-col flex-1 my-auto text-xs text-right max-w-[150px] text-slate-500">
            <img loading="lazy" src={data?.position?.company_logo} alt="Profile avatar" class="self-end w-12 aspect-square" />
            <div class="mt-2 text-base font-bold text-neutral-900">{data?.position?.company_name}</div>
            <div class="mt-1 whitespace-nowrap">{data?.position?.company_address}</div>
            <p class="self-end"> Joined <br /> {data?.position?.date} </p>
          </div>
          <div class="flex flex-col justify-center items-center py-px basis-0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f9c7fc865b52717f3046eac41a9dd5c145f763f74756a05f7c4eaaee605fe54?apiKey=dc11eee01a8f4aa6b112776747461d2f&" alt="Achievement badge" class=" border-slate-400 stroke-[1.5px] stroke-slate-400" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5011a83a14ac18602a77f6b088d7dd6e3741a121b1adbac7596978d933fa2834?apiKey=dc11eee01a8f4aa6b112776747461d2f&" alt="" class="aspect-[0.08] w-[5px]" />
            <div class="shrink-0 self-stretch bg-white rounded-full border-blue-600 border-solid border-[9px] h-[28px] w-[27px] stroke-[9px]"></div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5d9185538e907d7b1a88dd2532ce457db03db76ebf5207a8ad8334537f046c4?apiKey=dc11eee01a8f4aa6b112776747461d2f&" alt="" class="aspect-[0.08] w-[5px]" />
          </div>
        </div>
      </aside>
      <article class="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
        <div class="flex flex-col justify-center self-stretch px-5 py-5 my-auto w-full bg-white rounded-xl shadow-sm max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <h2 class="text-xl font-bold leading-8 text-neutral-900 max-md:max-w-full"> {data?.position?.position_title} </h2>
          <p class="mt-2 text-xs text-slate-500 max-md:max-w-full">  {data?.position?.position_description} </p>
        </div>
      </article>
    </div>
  </section>