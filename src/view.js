import { getWeather } from './index';

const getCityName = () => {
  const city = document.getElementById('searchBox').value;
  if (document.getElementById('fahrenheitBtn').checked === true) {
    getWeather(city, 1);
  } else {
    getWeather(city, 0);
  }
};

const displaySearchBox = () => {
  const weatherInfo = document.getElementById('weatherInfo');
  const results = document.createElement('div');
  const imageBg = document.getElementById('imageBg');
  const summary = document.createElement('div');
  const locationDate = document.createElement('div');
  locationDate.id = 'locationDate';
  summary.id = 'summary';
  summary.innerHTML = '';
  locationDate.innerHTML = '';
  imageBg.appendChild(summary);
  imageBg.appendChild(locationDate);
  results.id = 'results';
  results.innerHTML = '';
  weatherInfo.innerHTML = '<h1>My weather app</h1>';
  const searchBox = document.createElement('input');
  const searchBtn = document.createElement('button');
  const radioBtn = document.createElement('div');
  const fahrenheitBtn = document.createElement('input');
  const celciusBtn = document.createElement('input');
  radioBtn.id = 'radioBtn';
  fahrenheitBtn.setAttribute('type', 'radio');
  fahrenheitBtn.id = 'fahrenheitBtn';
  celciusBtn.setAttribute('type', 'radio');
  celciusBtn.id = 'celciusBtn';
  fahrenheitBtn.setAttribute('name', 'tempType');
  const F = document.createElement('span');
  F.innerHTML = 'F';
  const C = document.createElement('span');
  C.innerHTML = 'C';
  F.id = 'F';
  C.id = 'C';
  celciusBtn.setAttribute('name', 'tempType');
  searchBox.id = 'searchBox';
  searchBtn.id = 'searchBtn';
  searchBox.setAttribute('placeholder', 'city');
  searchBtn.innerHTML = 'check weather';
  radioBtn.appendChild(fahrenheitBtn);
  radioBtn.appendChild(F);
  radioBtn.appendChild(celciusBtn);
  radioBtn.appendChild(C);
  weatherInfo.appendChild(searchBox);
  weatherInfo.appendChild(radioBtn);
  weatherInfo.appendChild(searchBtn);
  weatherInfo.appendChild(results);
  searchBtn.addEventListener('click', getCityName);
};
const displayWeatherInfo = (temp, tempMin, tempMax, pressure, humidity, option) => {
  const city = document.getElementById('searchBox').value;
  const results = document.getElementById('results');
  const summary = document.getElementById('summary');
  const locationDate = document.getElementById('locationDate');
  summary.innerHTML = `<h1> ${temp.toFixed(2)} &deg </h1>`;
  locationDate.innerHTML = `<h2>${city}</h2>`;
  const date = new Date();
  locationDate.innerHTML += `<p>${date.toDateString()}</p>`;
  let unit = 'fahrenheit';
  if (option === 0) {
    unit = 'celcius';
  }
  results.innerHTML = `<h2>temperature: ${temp.toFixed(2)} &deg ${unit}</h2>`;
  results.innerHTML += `<h3>min temperature: ${tempMin.toFixed(2)} &deg ${unit}</h3>`;
  results.innerHTML += `<h3>max temperature: ${tempMax.toFixed(2)} &deg ${unit}</h3>`;
  results.innerHTML += `<h2>pressure: ${pressure}hPa</h2>`;
  results.innerHTML += `<h2>humidity: ${humidity}%</h2>`;
};

export {
  displaySearchBox,
  displayWeatherInfo,
};
