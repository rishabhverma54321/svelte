<script>
	import '../home/styles/index.pcss';
	export let cards;
	console.log(cards);
</script>

<section class="relative flex items-center self-stretch">
	<aside class="flex flex-col max-md:ml-0 max-md:w-full">
		<div class="gap5 flex max-md:mt-2">
			<div class="my-auto text-right text-xs text-slate-500">{cards?.container?.date}</div>
			<div class="flex w-[31px] flex-col items-center justify-center px-2">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9c7847e4992ebf9d4b0cb7503b8bd20f86381e6ace5f24cc54aa34db42093c5?apiKey=dc11eee01a8f4aa6b112776747461d2f&"
					alt="image"
					class="aspect-[0.12] w-4"
				/>
				<div
					class="h-4 w-full shrink-0 self-stretch rounded-full border-[3px] border-solid border-blue-600 bg-white stroke-[3px]"
				></div>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/08ee630bbc8002603eaf6f6faaedf60397c8e7885c59e206b1ac23fa2d6fc79f?apiKey=dc11eee01a8f4aa6b112776747461d2f&"
					alt="image"
					class="aspect-[0.12] w-4"
				/>
			</div>
		</div>
	</aside>
	<div class="home_cards ml-8 flex pb-4 pt-4 max-md:flex-col max-md:gap-0">
		{#each cards.container.cards as item, i}
			<article class="flex w-full flex-col max-md:ml-0 max-md:w-full">
				<div
					class="flex w-full grow flex-col rounded-xl border border-solid border-gray-300 bg-white pb-6 text-sm leading-5 text-neutral-900 max-md:mt-10"
				>
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						loading="lazy"
						src={item?.image}
						alt="Descriptive text about the image"
						class="aspect-[2.5] w-full rounded-t-lg"
					/>
					<p class="mx-6 mt-6 text-ellipsis max-md:mx-2.5">
						{item?.text}
					</p>
				</div>
			</article>
		{/each}
	</div>
</section>
