export function reveal(node, params = {}) {
	if (typeof IntersectionObserver === 'undefined') return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	node.setAttribute('data-reveal', '');
	if (params.delay) {
		node.style.setProperty('--reveal-delay', `${params.delay}ms`);
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-revealed');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -48px 0px' }
	);

	observer.observe(node);

	return {
		destroy: () => observer.disconnect()
	};
}
