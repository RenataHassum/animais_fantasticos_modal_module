export default function initTabNav() {
	const tabMenu = document.querySelectorAll('.js-tabmenu li');
	const tabContent = document.querySelectorAll('.js-tabcontent section');

	if (tabMenu.length && tabContent.length) {
		tabContent[0].classList.add('ativo');

		function ativarTab(i) {
			tabContent.forEach((section) => {
				section.classList.remove('ativo');
			});
			tabContent[i].classList.add('ativo');
		}

		tabMenu.forEach((li, i) => {
			li.addEventListener('click', function () {
				ativarTab(i);
			});
		});
	}
}


