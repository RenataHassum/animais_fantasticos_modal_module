export default function initScrollSuave() {
	const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

	if (linksInternos.length) {
		function scrollSuave(event) {
			event.preventDefault();
			const href = this.getAttribute('href');
			const section = document.querySelector(href);
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}

		linksInternos.forEach((link) => {
			link.addEventListener('click', scrollSuave);
		});
	}
}
