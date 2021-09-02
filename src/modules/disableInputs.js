const disableInputs = () => {
		// запрет ввода букв в калькуляторе
		const calcItems = document.querySelectorAll('input.calc-item');
		calcItems.forEach(item => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/\D/g, '');
			});
		});

		// запрет на ввод символов
		const forms = document.querySelectorAll('form');
		forms.forEach((item, i) => {
			item.addEventListener('input', e => {
				const target = e.target;
				if (target.id === `form${i + 1}-name`) {
					target.value = target.value.replace(/[\d\w^^\^~`!@#\$%^*_+\[\]{}\\:;?|>'\/<=&()№"]+$/gi, '');
				}
				if (target.id === `form${i + 1}-message`) {
					target.value = target.value.replace(/[a-z\^~`@#\$%^*_+\[\]{}\\|>'\/<=&()]+$/gi, '');
				}
				if (target.id === `form${i + 1}-email`) {
					target.value = target.value.replace(/[\а-яА-Я0-9^^\^`#\$%^+\[\]{}\\:;?|>\/<=&()№"]/g, '');
				}
				if (target.id === `form${i + 1}-phone`) {
					target.value = target.value.replace(/[а-яa-z^^\^~`!@#\$%^*_\[\]{}\\:;?|>'\/<=&№"]+$/gi, '');
				}
			});
		});

		// событие blur для всех инпутов
		const inputs = document.querySelectorAll('input');
		inputs.forEach(item => {
			item.addEventListener('blur', () => {
				if (item.getAttribute('name') === 'user_name') {
					if (item.value) {
						item.value = item.value.replace(/^\s+|\s+$/g, '');
						const words = item.value.split(' ');
						let newWord = '';
						if (words.length > 1) {
							words.forEach((word, i) => {
								if (i < words.length) {
									word = word[0].toUpperCase() + word.slice(1) + ' ';
								} else {
									word = word[0].toUpperCase() + word.slice(1);
								}
								newWord += word;
							});
							item.value = newWord;
						} else {
							item.value = item.value[0].toUpperCase() + item.value.slice(1);
						}
					} else {
						return
					}
				}
				item.value = item.value.replace(/\s+/g, ' ');
				item.value = item.value.replace(/^\s+|\s+$/g, '');
				if (item.value.match(/^-+|-+$/)) {
					item.value = item.value.replace(/^-+|-+$/g, '');
					if (item.value.match(/^\s+|\s+$/)) {
						item.value = item.value.replace(/^\s+|\s+$/g, '');
					}
				} else {
					item.value = item.value.replace(/-+/g, '-');
				}
			});
		});
	};
  export default disableInputs;