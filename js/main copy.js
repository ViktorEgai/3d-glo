/* eslint-disable indent */
window.addEventListener('DOMContentLoaded', () => {
	// Таймер
	const countTimer = deadline => {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000;
			let seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
			if (hours < 10) hours = '0' + hours;
			if (minutes < 10) minutes = '0' + minutes;
			if (seconds < 10) seconds = '0' + seconds;
			return {
				hours,
				minutes,
				seconds,
				timeRemaining
			};
		}

		function uploadTime() {
			if (getTimeRemaining().timeRemaining > 0) {
				timerHours.textContent = getTimeRemaining().hours;
				timerMinutes.textContent = getTimeRemaining().minutes;
				timerSeconds.textContent = getTimeRemaining().seconds;
			} else {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
			}
		}
		setInterval(uploadTime, 1000);
	};
	countTimer('30 aug 2021');

	// открытие меню
	const toggleMenu = () => {
		const menu = document.querySelector('menu');

		function handlerMenu() {
			menu.classList.toggle('active-menu');
		}

		document.addEventListener('click', event => {
			const target = event.target;
			if (target.closest('.menu')) handlerMenu();
			if (target.closest('.close-btn')) handlerMenu();
			if (target.closest('a[href*="#"]')) {
				if (target.attributes.href.textContent !== '#close') {
					handlerMenu();
				}
			}
			if (!target.closest('.active-menu') && !target.closest('.menu')) menu.classList.remove('active-menu');
		});
	};
	toggleMenu();

	// открытие popup окна
	const openPopup = () => {
		const popupBtn = document.querySelectorAll('.popup-btn'),
			popup = document.querySelector('.popup'),
			popupContent = document.querySelector('.popup-content');
		let count = -300;

		popupBtn.forEach(btn => {
			btn.addEventListener('click', () => {
				popup.style.display = 'block';
				// анимация popup
				function showPopup() {
					count += 7;
					popupContent.style.top = count + 'px';
					if (count <= 100) setTimeout(showPopup, 1);
				}
				if (window.screen.width > 768) showPopup();
			});
		});
		// закрытие попап
		popup.addEventListener('click', event => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
				count = -300;
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';
					count = -300;
				}
			}
		});
	};
	openPopup();

	// плавная прокрутка страницы при клике на ссылки
	const smoothScroll = () => {
		const menu = document.querySelector('menu');
		const anchors = menu.querySelectorAll('a[href*="#"]');
		anchors.forEach(item => {
			if (item.attributes.href.textContent !== '#close') {
				item.addEventListener('click', event => {
					event.preventDefault();
					const blockID = item.getAttribute('href').substr(1);
					document.getElementById(blockID).scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				});
			}
		});
	};
	smoothScroll();

	// табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');
		// навешивание классов после клика по табам
		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};
		// клики по табам
		tabHeader.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.service-header-tab');
			if (target) {
				tab.forEach((item, i) => {
					if (item === target) toggleTabContent(i);
				});
			}
		});
	};
	tabs();

	// слайдер
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			btn = document.querySelectorAll('.portfolio-btn'),
			ulDots = document.querySelector('.portfolio-dots'),
			slider = document.querySelector('.portfolio-content');

		let currentSlide = 0,
			interval;

		// Добавление точек на страницу
		const dots = () => {
			for (let i = 0; i < slide.length; i++) {
				const li = document.createElement('li');
				li.classList.add('dot');
				if (i === 0) li.classList.add('dot-active');
				ulDots.appendChild(li);
			}
		};
		dots();

		const dot = document.querySelectorAll('.dot');

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};
		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};


		const autoPlaySlide = () => {
			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) currentSlide = 0;
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};
		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', event => {
			event.preventDefault();

			const target = event.target;

			if (!target.matches('.portfolio-btn, .dot')) return;

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}
			if (currentSlide >= slide.length) currentSlide = 0;
			if (currentSlide < 0) currentSlide = slide.length - 1;

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		});

		// наведение мыши на кнопки
		slider.addEventListener('mouseover', event => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
				stopSlide();
			}
		});
		slider.addEventListener('mouseout', event => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
				startSlide(1000);
			}
		});
		startSlide();
	};
	slider();

	// блок с фотками "наша команда" изменение фото при наведении
	const changePhoto = () => {
		const photos = document.querySelectorAll('.command__photo');
		photos.forEach((item, index) => {
			item.addEventListener('mouseenter', () => {
				item.setAttribute('src', item.dataset.img);
			});
			item.addEventListener('mouseleave', () => {
				item.setAttribute('src', `images/command/command-${index + 1}.jpg`);
			});
		});
	};
	changePhoto();

	// запрет ввода инпутов
	const disableInput = () => {
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
	disableInput();

	// калькулятор
	const calc = (price = 100) => {
		const calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcDay = document.querySelector('.calc-day'),
			calcCount = document.querySelector('.calc-count'),
			totalValue = document.getElementById('total');

		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1,
				counter = 0;

			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = calcSquare.value;

			if (calcCount.value > 1) {
				countValue += (calcCount.value - 1) / 10;
			}

			if (calcDay.value && calcDay.value < 5) {
				dayValue *= 2;
			} else if (calcDay.value && calcDay.value < 10) {
				dayValue *= 1.5;
			}

			if (typeValue && squareValue) {
				total = price * typeValue * +squareValue * countValue * dayValue;
			}

			// анимация результата
			let animate;
			const calcAnimation = () => {
				if (counter < total) {
					counter += Math.ceil(total / 10);
					animate = requestAnimationFrame(calcAnimation);
					totalValue.textContent = counter;
					if (counter > total) {
						totalValue.textContent = Math.floor(counter - (counter - total));
					}
				}
			};

			//остановка анимации
			if (typeValue.length === 0 || squareValue.length === 0 || squareValue === '0') {
				totalValue.textContent = 0;
				cancelAnimationFrame(animate);
			} else {
				animate = requestAnimationFrame(calcAnimation);
			}
		};

		calcBlock.addEventListener('change', event => {
			const target = event.target;
			if (target.matches('.calc-type') || target.matches('.calc-square') ||
				target.matches('.calc-day') || target.matches('.calc-count')) {
				countSum();
			}
		});
	};
	calc(100);

	//  валидатор на количество символов в input'ах
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
					// валидация сообщения
					if (elem.getAttribute('name') === 'user_message') {
						if (elem.value) {
							if (elem.value.length < 15) {
								elem.classList.add('error-input');
								errorMsg.textContent = 'Сообщение должно содержать не менее 15 символов';
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
				});
			});
		});
	};
	validate();

	// send-ajx-form
	const sendForm = () => {
		const errorMessage = 'Что-то пошло не так...',
			loadMessage = 'Загрузка...',
			successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

		const forms = document.querySelectorAll('form');

		const statusMessage = document.createElement('div');
		statusMessage.style.cssText = 'font-size: 2rem;';
		// обработчик для всех форм
		forms.forEach((form) => {
			// событие сабмит
			form.addEventListener('submit', (event) => {
				form.querySelector('.btn').disabled = true;
				event.preventDefault();
				form.appendChild(statusMessage);
				const formData = new FormData(form);
				let body = {};
				formData.forEach((val, key) => {
					body[key] = val;
				});

				// вызов функции postData
				postData(body, () => {
						statusMessage.textContent = successMessage;
					},
					(error) => {
						statusMessage.textContent = errorMessage;
						console.error(error);
					});
				// очистка инпутов после отправки
				[...form].forEach((input) => {
					input.value = '';
				});
			});
			// цвет текста сообщения в popup окне
			if (form.id === 'form3') {
				statusMessage.style.color = '#fff';
			}
		});

		// стили для анимации 
		const animStyle = () => {
					const style = document.createElement('style');
		style.textContent = `
.sk-double-bounce {
  width: 50px;
  height: 50px;
  position: fixed;
  margin: auto;  
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
  
}
.sk-child {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #19b5fe;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: sk-double-bounce 2s infinite ease-in-out;
  }

  .sk-double-bounce-2 {
    animation-delay: -1s;
  }
@keyframes sk-double-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}

		`;
		document.head.appendChild(style);

		};

		// отправка данных на сервер
		const postData = (body, outputData, errorData) => {
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				// statusMessage.textContent = loadMessage;
				statusMessage.innerHTML = `
	<div class='sk-double-bounce'>
		<div class='sk-child sk-double-bounce-1'></div>
		<div class='sk-child sk-double-bounce-2'></div>
	</div>
				`;
				animStyle();
				if (request.readyState !== 4) {
					return;
				}
				if (request.status === 200) {
					outputData();
				} else {
					errorData(request.status);
				}
			});
			request.open('POST', './server.php');
			request.setRequestHeader('Content-Type', 'application/json');

			request.send(JSON.stringify(body));
		};
	};
	sendForm();
});