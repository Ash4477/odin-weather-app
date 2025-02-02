import renderHeader from "./header/header";
import renderMain from "./main/main";
import fetchWeatherData from "./weatherData";
import "./styles.css";

renderHeader();
fetchWeatherData("Karachi").then((res) => {
  renderMain(res);
});
