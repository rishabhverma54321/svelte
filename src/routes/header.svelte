<script lang="ts">
	// /** @type {import('./$types').}*/
	import * as Avatar from '$lib/components/ui/avatar';
	import ChevronDown from '../svg/chevronDown.svelte';
	import './header.pcss';

	type postButton = {
		src: string;
		alt: string;
		text: string;
	};

	const postButton: postButton = {
		src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e43414bffb7a8b20765446c36ab316aea49cc9a372b6e19d575a6d3ee9818fc9?apiKey=dc11eee01a8f4aa6b112776747461d2f&',
		alt: 'Post',
		text: 'Post'
	};

	export let data;
	const { navItems, userData } = data;
	let showUserList = false;
	let showSubNav = false;

	function ToggleUserList() {
		showUserList = !showUserList;
	}
	
	function ToggleSubNav() {
      showSubNav = !showSubNav;
	}
</script>

<header class="flex flex-col flex-wrap content-center justify-between gap-y-2.5 pt-2.5">
	<nav class="flex w-full justify-between gap-5 max-md:max-w-full relative">
		<div class="flex max-md:gap-2 max-md:items-center">
			<button
				data-collapse-toggle="navbar-multi-level"
				type="button"
				class="inline-flex h-8 w-8 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
				aria-controls="navbar-multi-level"
				aria-expanded="false"
				on:click={ToggleSubNav}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
			<div class="my-auto flex gap-1 px-px">
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/db4e9feef23770faf5a0472445eaa1a107c833969f764bf633f6d599420f9d10?apiKey=dc11eee01a8f4aa6b112776747461d2f&"
					alt=""
					class="aspect-square w-[27px] shrink-0"
				/>
				<div class="text text-2xl font-medium max-md:text-base">duggup</div>
			</div>
		</div>
		<div class="flex justify-between gap-5 max-md:gap-1">
			<div
				class="my-auto flex flex-auto justify-between gap-5 whitespace-nowrap text-sm leading-5 max-md:flex-wrap"
			>
				<div
					aria-label="Navigation Links"
					class={`${!showSubNav && 'max-md:hidden'} header_subnavbar flex flex-auto gap-0 px-5 text-neutral-600`}
				>
					{#each navItems as item, index}
						<a
							href={item?.link}
							class="flex gap-3 self-start rounded-[40px] px-5 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
							tabindex="0"
						>
							<img
								loading="lazy"
								src={item?.src}
								alt={item?.alt}
								class="my-auto aspect-square w-4 shrink-0"
							/>
							<span>{item?.text}</span>
						</a>
					{/each}
				</div>
				<a
					href="/"
					class="flex gap-3 self-start rounded border border-b-4 border-solid border-neutral-600 bg-white px-5 py-2 text-neutral-600 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 max-md:px-1 max-md:py-1 max-md:text-sm"
					tabindex="0"
				>
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/e43414bffb7a8b20765446c36ab316aea49cc9a372b6e19d575a6d3ee9818fc9?apiKey=dc11eee01a8f4aa6b112776747461d2f&"
						alt="Post"
						class="my-auto aspect-square w-4 shrink-0"
					/>
					<span class="mx-md:text-sm">Post</span>
				</a>
			</div>
			<div class="relative">
				<button
					class="flex cursor-pointer items-center gap-3 px-4 py-0.5 text-xl font-medium leading-6 text-neutral-600"
					tabindex="0"
					on:click={ToggleUserList}
				>
					<Avatar.Root class="header_avatar">
						<Avatar.Image src={userData?.profileSrc} alt={userData?.alt} />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
					<div class="max-md:hidden max-md:text-sm">{userData.name}</div>
					<ChevronDown />
				</button>
				{#if showUserList}
					<div
						class="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white py-1 text-neutral-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						tabindex="-1"
					>
						<a href="/" class="block px-4 py-2 text-sm text-inherit" id="user-menu-item-0">
							<span>Your Profile</span>
						</a>
						<a href="/" class="block px-4 py-2 text-sm text-inherit" id="user-menu-item-1">
							Settings
						</a>
						<a href="/" class="block px-4 py-2 text-sm text-inherit" id="user-menu-item-2">
							Sign out
						</a>
					</div>
				{/if}
			</div>
		</div>
	</nav>
	<div style="border-color: #525C69;" class="border-t-2 border-dotted" />
</header>
