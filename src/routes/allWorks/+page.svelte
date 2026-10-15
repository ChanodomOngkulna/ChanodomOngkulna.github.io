<script>
	import { reveal } from '$lib/actions/reveal.js';
	import { t } from '$lib/i18n.svelte.js';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects.js';
	import logoBg from '$lib/assets/logo-removebg.png';
</script>

<main class="pt-[140px] md:pt-[180px]">
	<div
		class="mx-auto w-full max-w-container-max px-margin-mobile pb-section-gap md:px-margin-desktop"
	>
		<header use:reveal class="mt-12 mb-16 md:mt-24 md:mb-24">
			<h1
				class="mb-6 font-display-lg-mobile text-display-lg-mobile text-ink md:font-display-lg md:text-display-lg"
			>
				{t('allworks.heading')}
			</h1>
			<p class="max-w-2xl font-body-lg text-body-lg text-graphite">
				{t('allworks.intro')}
			</p>
		</header>

		<div class="grid grid-cols-1 gap-gutter md:grid-cols-2">
			{#each projects as project, index (project.slug)}
				<ProjectCard {project} {index} />
			{/each}
			<article
				use:reveal={{ delay: 120 }}
				class="work-card flex min-h-[280px] flex-col items-center justify-center gap-4 p-10 text-center"
			>
				<img src={logoBg} alt="" class="h-20 w-20 opacity-80 invert" />
				<h2 class="font-headline-sm text-headline-sm text-ink">{t('works.empty.title')}</h2>
				<p class="max-w-64 font-body-md text-body-md text-graphite">
					{t('works.empty.desc')}
				</p>
			</article>
		</div>
	</div>
</main>
