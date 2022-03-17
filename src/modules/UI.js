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

  static hourlyWeather() {
    const hourlyWeatherContainer = this.createE('div', 'hourly-weather-container', '');

    for(let i = 0; i < 25; i++) {
      const hourlyWeather = this.createE('div', 'hourly-weather', '');
      const timeHour = this.createE('div', 'time-hour', '');
      hourlyWeather.appendChild(timeHour);
      const weatherIcon = this.createE('img', 'weather-icon', '');
      hourlyWeather.appendChild(weatherIcon);
      const hourlyTemperature = this.createE('div', 'hourly-temperature', '');
      hourlyWeather.appendChild(hourlyTemperature);
      hourlyWeatherContainer.appendChild(hourlyWeather);
    }

    return hourlyWeatherContainer;
  }

  static weeklyWeather() {
    const weeklyWeatherContainer = this.createE('div', 'weekly-weather-container', '');

    for(let i = 0; i < 8; i++) {
      const weeklyWeather = this.createE('div', 'weekly-weather', '');
      const dayWeek = this.createE('div', 'day-week', '');
      weeklyWeather.appendChild(dayWeek);
      const weatherIcon = this.createE('img', 'weather-icon', '');
      weeklyWeather.appendChild(weatherIcon);
      const dayWeekTemperature = this.createE('div', 'day-week-temperature', '');
      const dayLowTemperature = this.createE('div', 'day-low-temperature', '');
      const dayTemperature = this.createE('div', 'day-temperature', '');
      const dayHighTemperature = this.createE('div', 'day-high-temperature', '');
      dayWeekTemperature.appendChild(dayLowTemperature);
      dayWeekTemperature.appendChild(dayTemperature);
      dayWeekTemperature.appendChild(dayHighTemperature);
      weeklyWeather.appendChild(dayWeekTemperature);
      weeklyWeatherContainer.appendChild(weeklyWeather);
    }

    return weeklyWeatherContainer;
  }
}

export default UI;