import './style.css';
import UI from './modules/UI'
import DOM from './modules/DOM'


document.body.append(UI.header());
document.body.append(UI.content());
document.getElementById('content').appendChild(UI.searchBar());
document.getElementById('content').appendChild(UI.temperatureMetric());
document.getElementById('content').appendChild(UI.currentWeather());
document.getElementById('content').appendChild(UI.hourlyWeather());
document.getElementById('content').appendChild(UI.weeklyWeather());
DOM.searchWeather();
DOM.clickTemperatureMetric();
DOM.changeWeather('New York');