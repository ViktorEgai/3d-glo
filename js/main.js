/* eslint-disable indent */
window.addEventListener('DOMContentLoaded', () => {
	// Таймер
	const countTimer = (deadline) => {
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
			let target = event.target;
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
			popupClose = document.querySelector('.popup-close'),
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
		popup.addEventListener('click', (event) => {
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
		anchors.forEach((item) => {
			if (item.attributes.href.textContent !== '#close') {
				item.addEventListener('click', (event) => {
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
		const toggleTabContent = (index) => {
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
		tabHeader.addEventListener('click', (event) => {
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

			let target = event.target;

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
				})
			}
			if (currentSlide >= slide.length) currentSlide = 0;
			if (currentSlide < 0) currentSlide = slide.length - 1;

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		});

		// наведение мыши на кнопки
		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
				stopSlide();
			}
		});
		slider.addEventListener('mouseout', (event) => {
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

	// валидация инпутов
	const validate = () => {
		// валидация калькулятора
		const calcItems = document.querySelectorAll('input.calc-item');
		calcItems.forEach((item) => {
			item.addEventListener('input', () => {
				item.value = item.value.replace(/\D/g, '');
			});
		});

		// валидация формы
		const forms = document.querySelectorAll('form');
		forms.forEach((item, i) => {
			item.addEventListener('input', (e) => {
				let target = e.target;
				if (target.id === `form${i+1}-name` || target.id === `form${i+1}-message`) {
					target.value = target.value.replace(/[\d\w^^\^~`!@#\$%^*_+\[\]{}\\:;?|>'\/<=&()№"]+$/gi, '');
				}
				if (target.id === `form${i+1}-email`) {
					target.value = target.value.replace(/[\а-яА-Я0-9^^\^`#\$%^+\[\]{}\\:;?|>\/<=&()№"]/g, '');
				}
				if (target.id === `form${i+1}-phone`) {
					target.value = target.value.replace(/[а-яa-z^^\^~`!@#\$%^*_\[\]{}\\:;?|>'\/<=&№"]+$/gi, '');
				}
			});
		});

		// событие blur для всех инпутов
		const inputs = document.querySelectorAll('input');
		inputs.forEach((item) => {
			item.addEventListener('blur', () => {
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
	validate();
})