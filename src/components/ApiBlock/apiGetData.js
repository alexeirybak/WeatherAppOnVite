const apiKey = '21916db489e3429601b616a34c61e5a7';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

const fetchData = async (endpoint, lat, lon) => {
  const url = `${baseUrl}/${endpoint}?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=ru&units=metric`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Не удалось загрузить прогноз погоды');
  }

  return response.json();
};

export const getWeather = async (lat, lon) => {
  return fetchData('weather', lat, lon);
};

export const getForecast = async (lat, lon) => {
  return fetchData('forecast', lat, lon);
};
