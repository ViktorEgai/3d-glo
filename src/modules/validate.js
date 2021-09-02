const validate = () => {
	const forms = document.querySelectorAll('form');

	forms.forEach((form) => {
		// блокировка кнопки
		form.querySelector('.btn').disabled = true;
		// событие change для input 		
		[...form.elements].forEach(elem => {

			// создание дива для ошибок
			const errorMsg = document.createElement('div');
			errorMsg.classList.add('error');
			elem.insertAdjacentElement('afterend', errorMsg);

			// обработчик change
			elem.addEventListener('change', () => {

				const btn = form.querySelector('.btn');

				// валидация поля "Имя"
				if (elem.getAttribute('name') === 'user_name') {
					if (elem.value) {
						if (elem.value.length < 3 || elem.value.length > 10) {
							elem.classList.add('error-input');
							errorMsg.textContent = 'Введите от 3 до 10 букв';
							btn.disabled = true;
						} else {
							elem.classList.remove('error-input');
							errorMsg.textContent = '';
							btn.disabled = false;
						}
					} else {
						elem.classList.remove('error-input');
						errorMsg.textContent = '';
						btn.disabled = true;
					}
				}

				// валидация номера телефона
				if (elem.getAttribute('name') === 'user_phone') {
					if (elem.value) {
						if (elem.value.slice(0, 2) !== '+7' ||
							elem.value.length < 12 ||
							elem.value.length > 12) {
							elem.classList.add('error-input');
							errorMsg.textContent = 'Номер должен быть в формате +7XXXXXXX';
							btn.disabled = true;
						} else {
							elem.classList.remove('error-input');
							errorMsg.textContent = '';
							btn.disabled = false;
						}
					} else {
						elem.classList.remove('error-input');
						errorMsg.textContent = '';
						btn.disabled = true;
					}
				}

				// валидация маила
				if (elem.getAttribute('name') === 'user_email') {
					if (elem.value) {
						const mailReg = /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11}))$/;
						if (mailReg.test(elem.value)) {
							elem.classList.remove('error-input');
							errorMsg.textContent = '';
							btn.disabled = false;
						} else {
							elem.classList.add('error-input');
							errorMsg.textContent = 'Email введен некорректно.';
							btn.disabled = true;
						}
					} else {
							elem.classList.remove('error-input');
							errorMsg.textContent = '';
							btn.disabled = true;

					}
				}
			});
		});
	});

};

export default validate;