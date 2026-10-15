<script>
	import { reveal } from '$lib/actions/reveal.js';
	import { i18n, t } from '$lib/i18n.svelte.js';

	let { project, index = 0, heading = 'h2' } = $props();

	const spans = {
		4: 'md:col-span-4',
		5: 'md:col-span-5',
		6: 'md:col-span-6',
		7: 'md:col-span-7',
		8: 'md:col-span-8',
		12: 'md:col-span-12'
	};

	const description = $derived(project.description[i18n.locale] ?? project.description.en);
	const statusLabel = $derived(project.status ? t(`works.status.${project.status}`) : null);
</script>

<article
	use:reveal={{ delay: (index % 3) * 100 }}
	class="work-card group flex flex-col {spans[project.span] ?? 'md:col-span-6'}"
>
	<div class="relative h-64 w-full overflow-hidden md:h-[380px]">
		<img class="work-card-img h-full w-full object-cover" alt={project.alt} src={project.image} />
		{#if statusLabel}
			<span
				class="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-hairline bg-white/90 px-3.5 py-1.5 font-label-caps text-[10px] tracking-[0.14em] text-graphite uppercase backdrop-blur"
			>
				<span
					class="h-1.5 w-1.5 rounded-full {project.status === 'wip' ? 'bg-graphite' : 'bg-accent'}"
				></span>
				{statusLabel}
			</span>
		{/if}
	</div>
	<div class="flex flex-grow flex-col justify-between p-6 md:p-8">
		<div>
			<div class="flex items-start justify-between gap-4">
				<svelte:element
					this={heading}
					class="font-headline-sm text-headline-sm text-ink transition-colors duration-300 group-hover:text-accent"
				>
					{project.title}
				</svelte:element>
				<div class="mt-1 flex shrink-0 items-center gap-1">
					{#if project.github}
						<a
							class="flex h-9 w-9 items-center justify-center rounded-full text-graphite transition-colors duration-300 hover:bg-veil hover:text-accent"
							href={project.github}
							target="_blank"
							rel="external noreferrer"
							aria-label={t('card.github')}
						>
							<svg class="h-4.5 w-4.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
								<path
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
								/>
							</svg>
						</a>
					{/if}
					{#if project.demo}
						<a
							class="flex h-9 w-9 items-center justify-center rounded-full text-graphite transition-colors duration-300 hover:bg-veil hover:text-accent"
							href={project.demo}
							target="_blank"
							rel="external noreferrer"
							aria-label={t('card.demo')}
						>
							<span class="material-symbols-outlined text-[20px]">arrow_outward</span>
						</a>
					{/if}
				</div>
			</div>
			<p class="mt-2 mb-6 line-clamp-3 font-body-md text-body-md text-on-surface-variant">
				{description}
			</p>
		</div>
		<div class="flex flex-wrap gap-2">
			{#each project.tags as tag (tag)}
				<span
					class="inline-block rounded-full bg-veil px-3 py-1 font-label-caps text-[10px] tracking-[0.14em] text-graphite uppercase"
				>
					{tag}
				</span>
			{/each}
		</div>
	</div>
</article>
