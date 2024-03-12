<script>
	import CardsContainer from '../pages/home/cardsContainer.svelte';
	import HeroSection from '../pages/home/heroSection.svelte';
	import JournyContainer from '../pages/home/journyContainer.svelte';
	export let data;
	const {
		section: { journey, heroSection }
	} = data;
</script>

<div class="m-auto m-auto w-9/12">
	<HeroSection {heroSection} />
	<div class=" mt-4">
		{#each journey as item, i}
			{#if item?.container}
				<CardsContainer cards={item} />
			{/if}
			{#if item?.position}
				<JournyContainer data={item} />
			{/if}
		{/each}
	</div>
</div>
