<script>
	import { fade, scale } from 'svelte/transition';
	import { t } from '$lib/i18n.svelte.js';

	let { open = false, onclose = () => {} } = $props();

	$effect(() => {
		if (!open) return;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	});

	function onKeydown(event) {
		if (event.key === 'Escape') onclose();
	}
</script>

<svelte:window onkeydown={onKeydown} />

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0">
		<div
			transition:fade={{ duration: 200 }}
			class="absolute inset-0 bg-ink/25 backdrop-blur-[6px]"
			aria-hidden="true"
			onclick={onclose}
		></div>
		<div
			transition:scale={{ start: 0.96, duration: 250 }}
			role="dialog"
			aria-modal="true"
			aria-label={t('modal.title')}
			class="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-hairline bg-white shadow-2xl"
		>
			<div class="flex items-center justify-between border-b border-hairline p-6">
				<h2 class="font-headline-md text-headline-md text-ink">{t('modal.title')}</h2>
				<button
					class="text-graphite transition-colors duration-300 hover:text-ink"
					aria-label={t('modal.close')}
					onclick={onclose}
				>
					<span class="material-symbols-outlined">close</span>
				</button>
			</div>
			<div class="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
				<div
					class="flex flex-col items-start rounded-xl border border-hairline p-6 transition-colors duration-300 hover:border-accent/40"
				>
					<span class="material-symbols-outlined mb-4 text-[32px] text-accent">picture_as_pdf</span>
					<h3 class="mb-2 font-headline-sm text-headline-sm text-ink">
						{t('modal.portfolio')}
					</h3>
					<p class="mb-6 font-body-md text-body-md text-graphite">
						{t('modal.portfolioDesc')}
					</p>
					<button
						class="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 font-label-caps text-label-caps font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-300 hover:bg-accent-strong"
					>
						{t('modal.download')}
						<span class="material-symbols-outlined text-[18px]">download</span>
					</button>
				</div>
				<div
					class="flex flex-col items-start rounded-xl border border-hairline p-6 transition-colors duration-300 hover:border-accent/40"
				>
					<span class="material-symbols-outlined mb-4 text-[32px] text-accent">description</span>
					<h3 class="mb-2 font-headline-sm text-headline-sm text-ink">
						{t('modal.resume')}
					</h3>
					<p class="mb-6 font-body-md text-body-md text-graphite">
						{t('modal.resumeDesc')}
					</p>
					<button
						class="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 font-label-caps text-label-caps font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-300 hover:bg-accent-strong"
					>
						{t('modal.download')}
						<span class="material-symbols-outlined text-[18px]">download</span>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
