import { getWeatherInCelsius } from './index';

const getCityName = () => {
	const city = document.getElementById('searchBox').value;
	getWeatherInCelsius(city);
}

const displaySearchBox = () => {
	const weatherInfo = document.getElementById('weatherInfo');
	const searchBox = document.createElement('input');
	searchBox.id = 'searchBox'
	searchBox.setAttribute('placeholder', 'city');
	const searchBtn = document.createElement('button');
	searchBtn.innerHTML = 'check weather';
	weatherInfo.appendChild(searchBox);
	weatherInfo.append(searchBtn);
	searchBtn.addEventListener('click', getCityName);
}

export {
	 displaySearchBox
};