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

		document.addEventListener('click', event => {
			const target = event.target;

			if(target.id ==='scrollImg') {

				event.preventDefault();
				const parent = target.parentNode;
				const blockID = parent.getAttribute('href').substr(1);
				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
				
			}
		});
	};

  export default smoothScroll;