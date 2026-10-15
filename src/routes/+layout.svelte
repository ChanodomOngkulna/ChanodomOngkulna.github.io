<script>
	import './layout.css';
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.png';
	import DownloadModal from '$lib/components/DownloadModal.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { initLocale, t } from '$lib/i18n.svelte.js';

	let { children } = $props();

	let downloadOpen = $state(false);

	onMount(initLocale);
</script>

<svelte:head>
	<link rel="icon" href={logo} />
	<title>{t('meta.title')}</title>
	<link href="https://fonts.googleapis.com" rel="preconnect" />
	<link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;500;600;700&family=Noto+Serif+Thai:wght@400;500;600&family=Noto+Sans+Thai:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar ondownload={() => (downloadOpen = true)} />
{#key page.url.pathname}
	<div in:fade={{ duration: 220 }}>
		{@render children()}
	</div>
{/key}
<Footer />
<DownloadModal open={downloadOpen} onclose={() => (downloadOpen = false)} />
