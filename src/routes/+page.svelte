<script>
	import { resolve } from '$app/paths';
	import { reveal } from '$lib/actions/reveal.js';
	import { t } from '$lib/i18n.svelte.js';
	import Marquee from '$lib/components/Marquee.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects.js';

	const featured = projects.filter((project) => project.featured);
	const tech = [
		'SvelteKit',
		'Svelte',
		'Tailwind CSS',
		'TypeScript',
		'Node.js',
		'Docker',
		'MySQL',
		'Git',
		'Figma',
		'Vite'
	];

	let decoY = $state(0);

	function onScroll() {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		decoY = Math.min(window.scrollY * 0.08, 120);
	}
</script>

<svelte:window onscroll={onScroll} />

<main class="pt-[140px] md:pt-[180px]">
	<section
		id="about"
		class="relative mx-auto mb-section-gap flex min-h-[70vh] max-w-container-max flex-col items-start justify-center px-margin-mobile md:px-margin-desktop"
	>
		<div class="relative z-10 w-full md:w-8/12">
			<h1
				class="enter mb-4 font-display-lg-mobile text-display-lg-mobile leading-tight tracking-tight text-ink md:font-display-lg md:text-display-lg"
				style="--enter-delay: 0ms"
			>
				{t('hero.name')}
			</h1>
			<p
				class="enter mb-6 font-headline-sm text-headline-sm font-light text-graphite md:text-[30px]"
				style="--enter-delay: 140ms"
			>
				{t('hero.quote')}
			</p>
			<p
				class="enter mb-4 max-w-2xl font-body-lg text-body-lg text-on-surface-variant"
				style="--enter-delay: 260ms"
			>
				{t('hero.intro')}
			</p>
			<!-- <p
				class="enter mb-12 font-label-caps text-label-caps tracking-[0.14em] text-graphite uppercase"
				style="--enter-delay: 340ms"
			>
				{t('hero.codename')}
			</p> -->
			<div
				class="enter flex flex-col items-start gap-4 sm:flex-row sm:items-center"
				style="--enter-delay: 440ms"
			>
				<a
					class="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 font-label-caps text-label-caps font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-300 hover:bg-accent-strong"
					href="#works"
				>
					{t('hero.viewWorks')}
				</a>
				<a
					class="inline-flex items-center gap-2 rounded-full px-4 py-2 font-label-caps text-label-caps tracking-[0.14em] text-ink uppercase transition-colors duration-300 hover:bg-veil"
					href="#contact"
				>
					{t('hero.contact')}
					<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
				</a>
			</div>
		</div>
		<div
			class="enter absolute top-1/2 right-margin-desktop hidden w-[340px] -translate-y-1/2 opacity-80 lg:block"
			style="--enter-delay: 600ms; transform: translateY(calc(-50% + {decoY}px))"
		>
			<svg class="deco-rings w-full" viewBox="0 0 400 400" fill="none" aria-hidden="true">
				<circle cx="200" cy="200" r="70" stroke="#e5e7eb" stroke-width="1" />
				<circle cx="200" cy="200" r="115" stroke="#e5e7eb" stroke-width="1" />
				<circle cx="200" cy="200" r="160" stroke="#eceef1" stroke-width="1" />
				<circle cx="200" cy="200" r="196" stroke="#f0f2f4" stroke-width="1" />
				<circle
					cx="200"
					cy="200"
					r="160"
					stroke="#2b4cff"
					stroke-width="1.5"
					stroke-dasharray="220 790"
					stroke-linecap="round"
				/>
			</svg>
		</div>
	</section>

	<div class="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop">
		<Marquee items={tech} />
	</div>

	<section
		class="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop"
		id="works"
	>
		<div use:reveal class="mb-16 flex items-end justify-between border-b border-hairline pb-8">
			<h2 class="font-headline-md text-headline-md text-ink">{t('works.heading')}</h2>
			<a
				class="hidden items-center gap-2 rounded-full px-4 py-2 font-label-caps text-label-caps tracking-[0.14em] text-graphite uppercase transition-colors duration-300 hover:bg-veil hover:text-accent md:inline-flex"
				href={resolve('/allWorks')}
			>
				{t('works.all')}
				<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
			</a>
		</div>
		<div class="grid grid-cols-1 gap-gutter md:grid-cols-2">
			{#each featured as project, index (project.slug)}
				<ProjectCard {project} {index} heading="h3" />
			{/each}
		</div>
	</section>
</main>
