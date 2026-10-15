<script>
	import { t } from '$lib/i18n.svelte.js';
</script>

<footer
	id="contact"
	class="w-full border-t border-hairline bg-surface-container-lowest py-8 font-label-caps text-label-caps"
>
	<div
		class="mx-auto flex max-w-container-max flex-col items-center justify-between gap-6 px-margin-mobile md:flex-row md:px-margin-desktop"
	>
		<div class="mb-4 font-body-md text-body-md font-bold tracking-[0.14em] text-ink md:mb-0">
			BlackglassesDev
		</div>
		<div class="mb-4 text-center text-[10px] text-graphite md:mb-0 md:text-left">
			{t('footer.rights')}
		</div>
		<ul class="flex gap-8 text-[10px]">
			<li>
				<a
					class="text-graphite transition-colors duration-300 hover:text-accent"
					href="https://github.com/BlackglassesDev"
					target="_blank"
					rel="noreferrer">GitHub</a
				>
			</li>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<li>
				<a class="text-graphite transition-colors duration-300 hover:text-accent" href="#"
					>Facebook</a
				>
			</li>
			<!-- svelte-ignore a11y_invalid_attribute -->
			<li>
				<a class="text-graphite transition-colors duration-300 hover:text-accent" href="#"
					>Instagram</a
				>
			</li>
		</ul>
	</div>
</footer>
