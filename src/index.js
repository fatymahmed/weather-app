import * as view from './view';

function getWeather(location){
	generateNewImg(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);
}

async function getWeatherInCelcius(url) 
    {
        const response = await fetch(url, { mode: 'cors'});
        const result = await response.json();
				const weatherInfo = result.main;
				console.log(weatherInfo);
				const temp = weatherInfo.temp - 273.15;
				const tempMin = weatherInfo.temp_min;
				const tempMax = weatherInfo.temp_max;
				const pressure = weatherInfo.pressure;
				const humidity = weatherInfo.humidity;
				console.log(temp);
				× 9/5 - 459.67
		}
		async function getWeatherInFahrenheit(url) 
    {
        const response = await fetch(url, { mode: 'cors'});
        const result = await response.json();
				const weatherInfo = result.main;
				console.log(weatherInfo);
				const temp = weatherInfo.temp * 9/5 - 459.67;
				const tempMin = weatherInfo.temp_min;
				const tempMax = weatherInfo.temp_max;
				const pressure = weatherInfo.pressure;
				const humidity = weatherInfo.humidity;
				console.log(temp);
    }	

document.onload(view.displaySearchBox());

export {
	getWeatherInCelsius
};