export default function initAnimacaoScroll() {
	const sections = document.querySelectorAll('.js-scroll');
	const windowMetade = innerHeight * 0.6;

	if (sections.length) {
		function animaScroll(event) {
			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top - windowMetade;
				if (sectionTop < 0) {
					section.classList.add('ativo');
				} else {
					section.classList.remove('ativo');
				}
			});
		}
		animaScroll();
		window.addEventListener('scroll', animaScroll);
	}
}
