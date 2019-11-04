import * as view from './view';

const getWeatherInCelcius = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const result = await response.json();
    const weatherInfo = result.main;
    const temp = weatherInfo.temp - 273.15;
    const tempMin = weatherInfo.temp_min - 273.15;
    const tempMax = weatherInfo.temp_max - 273.15;
    const { pressure } = weatherInfo;
    const { humidity } = weatherInfo;
    view.displayWeatherInfo(temp, tempMin, tempMax, pressure, humidity, 0);
  } catch (err) {
    alert('city not found');
  }
};

const getWeatherInFahrenheit = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    const result = await response.json();
    const weatherInfo = result.main;
    const temp = ((weatherInfo.temp - 273.15) * 9) / 5 + 32;
    const tempMin = ((weatherInfo.temp_min - 273.15) * 9) / 5 + 32;
    const tempMax = ((weatherInfo.temp_max - 273.15) * 9) / 5 + 32;
    const { pressure } = weatherInfo;
    const { humidity } = weatherInfo;
    view.displayWeatherInfo(temp, tempMin, tempMax, pressure, humidity, 1);
  } catch (err) {
    alert('city not found');
  }
};

const getWeather = (location, option) => {
  if (option === 1) {
    getWeatherInFahrenheit(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);
  } else {
    getWeatherInCelcius(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('searchBox').value}&APPID=e35c92eefa655c7d2e50f8101fc984ca`);
  }
};
document.onload(view.displaySearchBox());

export {
  getWeather,
};
