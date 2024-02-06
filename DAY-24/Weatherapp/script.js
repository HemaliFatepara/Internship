let todayWeatherBody = document.getElementById("todayWeather");
let input = document.getElementById("search");

// searching for country

input.addEventListener("input", function (e) {
  if (e.target.value == "") {
    getTodayWeatherData(userZone);

  } else {
    let countryValue = e.target.value;
    getTodayWeatherData(countryValue);
 
  }
});

// today weather //

let todayWeather;

async function getTodayWeatherData(country) {
  let todayWeatherData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=f363c6f19c364fe5955182616230308&q=${country}`
  );
  if (todayWeatherData.status >= 200 && todayWeatherData.status <= 299) {
    todayWeatherData = await todayWeatherData.json();
    todayWeather = todayWeatherData;
    displayTodayWeather();
  } 

}

function displayTodayWeather() {
  let { location, current } = todayWeather;

  box = `
 

  <div>
    <br>
    <p>${location.name}, ${location.country}</p>
    <div>
      <h2>${Math.round(current.temp_c)}<sup>o</sup>C</h2>
    </div>
  </div>
  `;

  todayWeatherBody.innerHTML = box;
}

// get the current user location

let userZone;

async function getZone() {
  let zoneData = await fetch("https://ipinfo.io/?token=13a30ff1de8c72");
  zoneData = await zoneData.json();
  userZone = zoneData.city;
  getTodayWeatherData(userZone);
}

getZone();