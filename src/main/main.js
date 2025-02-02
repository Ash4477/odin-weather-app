import "./main.css";

const renderMain = ({
  resolvedAddress,
  temp,
  feelslike,
  humidity,
  windspeed,
}) => {
  const conditionText = document.createElement("h3");
  conditionText.textContent = "Mist";

  const addressText = document.createElement("h2");
  addressText.textContent = resolvedAddress;

  const tempText = document.createElement("h1");
  tempText.classList.add("f-degree");
  tempText.textContent = temp;

  const feelLikeText = document.createElement("p");
  feelLikeText.textContent = `FEELS LIKE: ${feelslike}`;
  feelLikeText.classList.add("f-degree");

  const windSpeedText = document.createElement("p");
  windSpeedText.textContent = `WIND: ${windspeed} MPH`;

  const humidityText = document.createElement("p");
  humidityText.textContent = `HUMIDITY: ${humidity}%`;

  const additionalTempInfoSpan = document.createElement("span");
  additionalTempInfoSpan.classList.add("add-temp-info");
  additionalTempInfoSpan.appendChild(feelLikeText);
  additionalTempInfoSpan.appendChild(windSpeedText);
  additionalTempInfoSpan.appendChild(humidityText);

  const tempInfoContainer = document.createElement("div");
  tempInfoContainer.classList.add("temp-info");
  tempInfoContainer.appendChild(tempText);
  tempInfoContainer.appendChild(additionalTempInfoSpan);

  const degreeSwitch = document.createElement("button");
  degreeSwitch.classList.add("switch-btn");
  degreeSwitch.textContent = "Switch to Celsius";
  degreeSwitch.addEventListener("click", () => {
    if (degreeSwitch.textContent === "Switch to Celsius") {
      degreeSwitch.textContent = "Switch to Farenheit";
      tempText.textContent = (((temp - 32) * 5) / 9).toFixed(1);
      tempText.classList.remove("f-degree");
      tempText.classList.add("c-degree");
      feelLikeText.textContent = `FEELS LIKE: ${(((feelslike - 32) * 5) / 9).toFixed(1)}`;
      feelLikeText.classList.remove("f-degree");
      feelLikeText.classList.add("c-degree");
    } else {
      degreeSwitch.textContent = "Switch to Celsius";
      tempText.textContent = temp;
      tempText.classList.remove("c-degree");
      tempText.classList.add("f-degree");
      feelLikeText.textContent = `FEELS LIKE: ${feelslike}`;
      feelLikeText.classList.remove("c-degree");
      feelLikeText.classList.add("f-degree");
    }
  });

  const weatherInfoContainer = document.createElement("div");
  weatherInfoContainer.appendChild(conditionText);
  weatherInfoContainer.appendChild(addressText);
  weatherInfoContainer.appendChild(tempInfoContainer);
  weatherInfoContainer.appendChild(degreeSwitch);

  document.querySelector("main").appendChild(weatherInfoContainer);
};

export default renderMain;
