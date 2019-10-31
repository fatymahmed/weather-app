import * as view from './view';

function getWeather(location, option){
	if (option ===1){
		getWeatherInFahrenheit(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);
	}
	else {
		getWeatherInCelcius(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);
	}
}

async function getWeatherInCelcius(url)
{
    try{
        const response = await fetch(url, { mode: 'cors'});
        const result = await response.json();
				const weatherInfo = result.main;
				const temp = weatherInfo.temp - 273.15;
				const tempMin = weatherInfo.temp_min - 273.15;
				const tempMax = weatherInfo.temp_max - 273.15;
				const pressure = weatherInfo.pressure;
				const humidity = weatherInfo.humidity;
				view.displayWeatherInfo(temp, tempMin , tempMax, pressure, humidity);
			}	
		 catch(err) {
			alert('city not found'); 
			}
}	
		async function getWeatherInFahrenheit(url) 
    {
				try{
					const response = await fetch(url, { mode: 'cors'});
					const result = await response.json();
					const weatherInfo = result.main;
					const temp = (weatherInfo.temp - 273.15) * 9/5 + 32;
					const tempMin = (weatherInfo.temp_min - 273.15) * 9/5 + 32 ;
					const tempMax = (weatherInfo.temp_max - 273.15) * 9/5 + 32 ;
					const pressure = weatherInfo.pressure;
					const humidity = weatherInfo.humidity;
					view.displayWeatherInfo(temp, tempMin , tempMax, pressure, humidity);
				}
			 catch(err) {
					alert('city not found'); 
    	}	
		}

	document.onload(view.displaySearchBox());

export {
	getWeather
};