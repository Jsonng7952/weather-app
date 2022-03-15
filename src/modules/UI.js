class UI {

  static createE(element, className, text) {
    const e = document.createElement(`${element}`);
    e.classList.add(`${className}`);
    e.textContent = `${text}`;

    return e;
  }

  static header() {
    const header = document.createElement('header');
    header.textContent = 'Weather App';

    return header;
  }

  static content() {
    const content = document.createElement('div');
    content.id = 'content';

    return content;
  }

  static searchBar() {
    const searchBarContainer = this.createE('div', 'search-bar-container', '');
    const searchInput = this.createE('input', 'search-location', '');
    searchInput.type = 'text';
    searchInput.placeholder = 'Location Name';
    searchBarContainer.appendChild(searchInput);
    const searchBtn = this.createE('button', 'search-button', '');
    const searchImg = this.createE('i', 'fa', '');
    searchImg.classList.add('fa-search');
    searchImg.ariaHidden = 'true';
    searchBtn.appendChild(searchImg);
    searchBarContainer.appendChild(searchBtn);

    return searchBarContainer;
  }

  static currentWeather() {
    const currentWeatherContainer = this.createE('div', 'current-weather-container', '');
    const currentLocation = this.createE('div', 'current-location', '');
    currentWeatherContainer.appendChild(currentLocation);
    const currentTemperature = this.createE('div', 'current-temperature', '');
    currentWeatherContainer.appendChild(currentTemperature);
    const currentWeatherInfo = this.createE('div', 'current-weather-info', '');
    currentWeatherContainer.appendChild(currentWeatherInfo);
    const highLowTemperature = this.createE('div', 'high-low', '');
    const currentHighTemperature = this.createE('div', 'current-high', '');
    const currentLowTemperature = this.createE('div', 'current-low', '');
    highLowTemperature.appendChild(currentHighTemperature);
    highLowTemperature.appendChild(currentLowTemperature);
    currentWeatherContainer.appendChild(highLowTemperature);

    return currentWeatherContainer;
  }
}

export default UI;