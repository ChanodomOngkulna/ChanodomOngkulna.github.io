<script>
	let { items = [] } = $props();
</script>

<div class="marquee" aria-hidden="true">
	<div class="marquee-track">
		<ul class="flex shrink-0 items-center gap-10 pr-10">
			{#each items as item (item)}
				<li class="flex shrink-0 items-center gap-10 font-label-caps text-label-caps text-graphite">
					{item}
					<span class="h-3.5 w-px bg-hairline"></span>
				</li>
			{/each}
		</ul>
		<ul class="flex shrink-0 items-center gap-10 pr-10">
			{#each items as item (item)}
				<li class="flex shrink-0 items-center gap-10 font-label-caps text-label-caps text-graphite">
					{item}
					<span class="h-3.5 w-px bg-hairline"></span>
				</li>
			{/each}
		</ul>
	</div>
</div>
