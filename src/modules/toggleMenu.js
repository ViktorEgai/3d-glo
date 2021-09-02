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

  export default toggleMenu;