import './style.css';
import UI from './modules/UI'
import DOM from './modules/DOM'
import WeatherAPI from './modules/WeatherAPI'

document.body.append(UI.header());
document.body.append(UI.content());
document.getElementById('content').appendChild(UI.searchBar());
document.getElementById('content').appendChild(UI.currentWeather());
document.getElementById('content').appendChild(UI.hourlyWeather());
document.getElementById('content').appendChild(UI.weeklyWeather());
DOM.searchWeather();
DOM.changeWeather('New York');
