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
				// очистка инпутов при закрытиые попап
				popupContent.querySelectorAll('input').forEach(item => {
					item.value = '';
					if (item.classList.contains('error-input')) item.classList.remove('error-input');
					if (item.nextElementSibling) item.nextElementSibling.remove();
				});
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';
					count = -300;
					// очистка инпутов при закрытиые попап
					popupContent.querySelectorAll('input').forEach(item => {
						item.value = '';
						if (item.classList.contains('error-input')) item.classList.remove('error-input');
						if (item.nextElementSibling) item.nextElementSibling.remove();
					});
				}
			}
		});
	};

  export default openPopup;