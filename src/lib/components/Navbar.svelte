<script>
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { i18n, setLocale, t } from '$lib/i18n.svelte.js';
	import logo_rm_bg from '$lib/assets/logo-removebg.png';

	let { ondownload } = $props();

	let menuOpen = $state(false);
	let scrolled = $state(false);
	let hidden = $state(false);
	let lastY = 0;

	const hash = $derived(page.url.hash);
	const isHome = $derived(page.url.pathname === '/' && hash !== '#about' && hash !== '#contact');
	const isAbout = $derived(page.url.pathname === '/' && hash === '#about');
	const isWorks = $derived(page.url.pathname === '/allWorks');
	const isContact = $derived(page.url.pathname === '/' && hash === '#contact');

	const activeClass = 'text-accent border-accent border-b pb-1';
	const inactiveClass = 'text-graphite hover:text-ink transition-colors duration-300';
	const navClass = (active) => (active ? activeClass : inactiveClass);

	function onScroll() {
		const y = window.scrollY;
		scrolled = y > 12;
		hidden = y > lastY && y > 140;
		lastY = y <= 0 ? 0 : y;
	}
</script>

<svelte:window onscroll={onScroll} />

<nav
	class="fixed top-4 left-1/2 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-container-max -translate-x-1/2 items-center justify-between rounded-full border border-hairline bg-white/75 px-5 py-3 backdrop-blur-xl transition-transform duration-300 md:top-6 md:px-8 {hidden
		? '-translate-y-[140%]'
		: ''} {scrolled ? 'shadow-[0_14px_40px_-24px_rgb(17_19_24/0.35)]' : ''}"
>
	<a class="shrink-0" href={resolve('/')} aria-label={t('nav.home')}>
		<img src={logo_rm_bg} alt="BlackglassesDev" class="h-9 w-9 invert md:h-10 md:w-10" />
	</a>
	<ul class="hidden items-center gap-gutter font-label-caps text-label-caps md:flex">
		<li>
			<a class={navClass(isHome)} href={resolve('/')} aria-current={isHome ? 'page' : undefined}
				>{t('nav.home')}</a
			>
		</li>
		<li>
			<a
				class={navClass(isAbout)}
				href={resolve('/#about')}
				aria-current={isAbout ? 'page' : undefined}>{t('nav.about')}</a
			>
		</li>
		<li>
			<a
				class={navClass(isWorks)}
				href={resolve('/allWorks')}
				aria-current={isWorks ? 'page' : undefined}>{t('nav.works')}</a
			>
		</li>
		<li>
			<a
				class={navClass(isContact)}
				href={resolve('/#contact')}
				aria-current={isContact ? 'page' : undefined}>{t('nav.contact')}</a
			>
		</li>
	</ul>
	<div class="flex items-center gap-3">
		<div
			class="flex items-center rounded-full border border-hairline bg-veil/70 p-0.5"
			role="group"
			aria-label={t('nav.toggleLang')}
		>
			<button
				class="rounded-full px-2.5 py-1 font-label-caps text-[10px] tracking-[0.08em] transition-colors duration-300 {i18n.locale ===
				'th'
					? 'bg-ink text-white'
					: 'text-graphite hover:text-ink'}"
				aria-pressed={i18n.locale === 'th'}
				onclick={() => setLocale('th')}
			>
				ไทย
			</button>
			<button
				class="rounded-full px-2.5 py-1 font-label-caps text-[10px] tracking-[0.08em] transition-colors duration-300 {i18n.locale ===
				'en'
					? 'bg-ink text-white'
					: 'text-graphite hover:text-ink'}"
				aria-pressed={i18n.locale === 'en'}
				onclick={() => setLocale('en')}
			>
				EN
			</button>
		</div>
		<button
			class="hidden items-center justify-center rounded-full bg-accent px-5 py-2.5 font-label-caps text-label-caps font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-300 hover:bg-accent-strong md:inline-flex"
			onclick={ondownload}
		>
			{t('nav.download')}
		</button>
		<button
			class="text-ink md:hidden"
			aria-expanded={menuOpen}
			aria-label={t('nav.toggleMenu')}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;"
				>{menuOpen ? 'close' : 'menu'}</span
			>
		</button>
	</div>
</nav>

{#if menuOpen}
	<div
		transition:fly={{ x: 24, duration: 250 }}
		class="fixed top-24 right-4 z-50 w-64 rounded-2xl border border-hairline bg-white p-6 shadow-xl md:hidden"
	>
		<ul class="flex flex-col gap-4 font-label-caps text-label-caps">
			<li>
				<a
					class={navClass(isHome)}
					href={resolve('/')}
					aria-current={isHome ? 'page' : undefined}
					onclick={() => (menuOpen = false)}>{t('nav.home')}</a
				>
			</li>
			<li>
				<a
					class={navClass(isAbout)}
					href={resolve('/#about')}
					aria-current={isAbout ? 'page' : undefined}
					onclick={() => (menuOpen = false)}>{t('nav.about')}</a
				>
			</li>
			<li>
				<a
					class={navClass(isWorks)}
					href={resolve('/allWorks')}
					aria-current={isWorks ? 'page' : undefined}
					onclick={() => (menuOpen = false)}>{t('nav.works')}</a
				>
			</li>
			<li>
				<a
					class={navClass(isContact)}
					href={resolve('/#contact')}
					aria-current={isContact ? 'page' : undefined}
					onclick={() => (menuOpen = false)}>{t('nav.contact')}</a
				>
			</li>
			<li>
				<button
					class="text-graphite uppercase transition-colors duration-300 hover:text-ink"
					onclick={() => {
						menuOpen = false;
						ondownload();
					}}
				>
					{t('nav.download')}
				</button>
			</li>
		</ul>
	</div>
{/if}
