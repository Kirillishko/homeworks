const createModal = (errorName, errorDescription) => {
	const rootContainer = document.getElementById('root-container');
	const html = `<div class="modal" id="modal">
			<div class="modal_container">
				<div class="modal_content">
					<h2>${errorName}</h2>
					<h3>${errorDescription}</h3>
					<input type="button" value="Закрыть" />
				</div>
			</div>
		</div>`;

	rootContainer.innerHTML += html;

	const modalElement = rootContainer.querySelector('#modal');
	const modalButton = modalElement.querySelector('.modal_content input');

	const handleButtonClick = () => {
		modalElement.remove();
		modalButton.removeEventListener('click', handleButtonClick);
	};

	modalButton.addEventListener('click', handleButtonClick);
};

export default createModal;
