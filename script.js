const apiKey = "393519dac870671424294ecd3aff2864";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search .btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Img/chat1.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Img/clear2.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Img/drizzle2.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Img/mist2.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
