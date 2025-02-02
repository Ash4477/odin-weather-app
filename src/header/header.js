import "./header.css";
import renderMain from "../main/main";
import fetchWeatherData from "../weatherData";

const renderHeader = () => {
  const searchContainer = document.createElement("div");

  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid");
  searchIcon.classList.add("fa-magnifying-glass");

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("placeholder", "Search");
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const location = searchInput.value;
      fetchWeatherData(location).then((res) => {
        renderMain(res);
      });
    }
  });

  searchContainer.appendChild(searchIcon);
  searchContainer.appendChild(searchInput);
  document.querySelector("header").appendChild(searchContainer);
};

export default renderHeader;
