export default function initModal() {
	const botaoAbrir = document.querySelector('[data-modal="abrir"]');
	const botaoFechar = document.querySelector('[data-modal="fechar"]');
	const containerModal = document.querySelector('[data-modal="container"]');

	if (botaoAbrir && botaoFechar && containerModal) {
		botaoAbrir.addEventListener('click', toggleModal);
		botaoFechar.addEventListener('click', toggleModal);
		containerModal.addEventListener('click', clickForaModal);

		function toggleModal(event) {
			event.preventDefault();
			containerModal.classList.toggle('ativo');
		}

		function clickForaModal(event) {
			if (event.target === this) {
				toggleModal(event); // passar o event dentro, se não, não funciona
			}
		}
	}
}