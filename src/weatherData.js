const fetchWeatherData = async (location) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=65L4E4UZPZHJEXW5KWGR6P7KE`;
  const response = await fetch(url, { mod: "cors" });
  const data = await response.json();
  const { resolvedAddress, currentConditions } = data;
  const { temp, conditions, humidity, feelslike, windspeed } =
    currentConditions;

  return { resolvedAddress, conditions, temp, humidity, feelslike, windspeed };
};

export default fetchWeatherData;
