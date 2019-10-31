import { getWeather } from './index';

const getCityName = () => {
	const city = document.getElementById('searchBox').value;
	getWeatherInCelsius(city);
}

const displaySearchBox = () => {
	const weatherInfo = document.getElementById('weatherInfo');
	const searchBox = document.createElement('input');
	const searchBtn = document.createElement('button');
	const fahrenheitBtn = document.createElement('input');
	const celciusBtn = document.createElement('input');
	fahrenheitBtn.setAttribute('type', 'radio');
	celciusBtn.setAttribute('type', 'radio');
	fahrenheitBtn.setAttribute('name', 'tempType');
	const F = document.createElement('span');
	F.innerHTML = 'F';
	const C = document.createElement('span');
	C.innerHTML = 'C';
	celciusBtn.setAttribute('name', 'tempType');
	searchBox.id = 'searchBox'
	searchBox.setAttribute('placeholder', 'city');
	searchBtn.innerHTML = 'check weather';
	weatherInfo.appendChild(searchBox);
	weatherInfo.appendChild(fahrenheitBtn);
	weatherInfo.appendChild(F);
	weatherInfo.appendChild(celciusBtn);
	weatherInfo.appendChild(C);
	weatherInfo.append(searchBtn);
	searchBtn.addEventListener('click', getCityName);
}

export {
	 displaySearchBox
};