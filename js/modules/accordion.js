export default function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  accordionList[0].nextElementSibling.classList.add('ativo');

	if (accordionList.length) {
		function ativarAccordion(event) {
			this.classList.toggle('ativo');
			this.nextElementSibling.classList.toggle('ativo');
		}

		accordionList.forEach((i) => {
			i.addEventListener('click', ativarAccordion);
		});
	}
}







