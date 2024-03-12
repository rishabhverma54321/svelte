<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import ExternalLink from '../../svg/externalLink.svelte';
	import './styles/index.pcss';

	export let heroSection: any;
</script>

<section class="mt-24 flex justify-between gap-5 md:flex-wrap">
	<div
		class="flex basis-0 flex-col items-center px-5 text-center text-2xl font-bold leading-7 text-slate-600"
	>
		<Avatar.Root class="heroSection_avatar">
			<Avatar.Image src={heroSection?.cofounder?.image} alt="Profile photo" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<p class="mt-2.5">Krishna Kiran</p>
	</div>
	<div class="my-auto flex w-fit shrink-0 grow basis-0 md:max-w-full">
		<div class="flex justify-between gap-5 ps-4 w-5/6 flex-col">
			<p  style="max-width:590px" class="flex-auto self-start text-sm leading-6 text-neutral-900 md:max-w-full">
				Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
				Engineering. I write hot-takes on building a business, shipping delightful products and
				accelerating product and career growth.
			</p>
			<button
				class="justify-center rounded border-b-4 text-sm  w-fit border border-solid border-neutral-600 bg-white px-7 py-2 text-neutral-600 t shadow-sm"
				tabindex="0">Followed</button
			>
		</div>
		<div
			class="flex flex-col items-end justify-between gap-5 whitespace-nowrap text-sm leading-5 text-neutral-600 w-fit"
		>
			<div class="flex max-w-[150px] basis-0 flex-col whitespace-nowrap text-right">
				<img
					loading="lazy"
					src={heroSection?.logo}
					alt="Duggup Logo"
					class="w-9 self-end"
				/>
				<p class="mt-2 text-base font-bold text-black">Duggup</p>
				<p class="ml-5 mt-1 self-start text-xs text-slate-500 md:ml-2.5">Co-Founder and CEO</p>
			</div>
			<div class="my-auto flex justify-end gap-4 pl-9">
				<div class="my-auto flex justify-center gap-1 pointer">
					<a href={heroSection.url} class="grow" tabindex="0">My website</a>
					<a href={heroSection.url} target="_blank" class="grow" tabindex="0"><ExternalLink/></a>
					<span class="flex w-full items-center gap-1 ms-2">
						<div class="heroSection_circle"/>
						<div class="heroSection_circle"/>
						<div class="heroSection_circle"/>
					</span>
				</div>
				<!-- <img
					loading="lazy"
					src={ext_3}
					class="aspect-square w-7 shrink-0"
					alt="Social media icon"
				/> -->
			</div>
		</div>
	</div>
</section>
