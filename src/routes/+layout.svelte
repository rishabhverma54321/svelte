<script>
	import '../app.pcss';
	import Header from './header.svelte';
	export let data;
</script>

<div class="max-w-screen-2xl m-auto w-11/12">


<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  </nav>
	<Header {data} />
	<slot />
</div>
