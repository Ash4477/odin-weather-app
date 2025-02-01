import "./header.css";

const renderHeader = () => {
  const searchContainer = document.createElement("div");

  const searchIcon = document.createElement("i");
  searchIcon.classList.add("fa-solid");
  searchIcon.classList.add("fa-magnifying-glass");

  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("placeholder", "Search");

  searchContainer.appendChild(searchIcon);
  searchContainer.appendChild(searchInput);
  document.querySelector("header").appendChild(searchContainer);
};

export default renderHeader;
