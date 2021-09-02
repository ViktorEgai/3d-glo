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
  export default calc;