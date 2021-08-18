
const weeks = ['понедельник', 'вторник', 'среда', 'четверг', 
    'пятница', 'суббота', 'воскресенье'];
const date = new Date();

function nyDaysLeft() {
	const newYearDate = new Date('1 jan 2022');
	const daysLeft = Math.ceil((newYearDate.getTime() - date.getTime()) / 1000 / 3600 / 24);
	return daysLeft;
}

function getDayTime() {
	if (date.getHours() < 10 && date.getHours() > 5) return 'Доброе утро';
	if (date.getHours() > 10 && date.getHours() < 18) return 'Добрый день';
	if (date.getHours() > 18 && date.getHours() < 24) return 'Добрый вечер';
	if (date.getHours() >= 0) return 'Доброй ночи';
}

function getWeekName() {
	for (let i = 0; i < weeks.length; i++) {
		if (i === date.getDay() - 1) return weeks[i];
	}
}
function loadInfo() {
	const div = document.createElement('div');
	div.innerHTML = `<p>${getDayTime()}</p>
					<p>Сегодня: ${getWeekName()}</p>
					<p>Текущее время: ${date.toLocaleTimeString('en')}</p>
					<p>До нового года осталось: ${nyDaysLeft()} дней</p>`;
	document.body.append(div);
}
loadInfo();