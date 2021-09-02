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
  export default changePhoto;