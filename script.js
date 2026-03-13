const apiKey = "3576d782eb7eeca5708a6d9e9b7fabcf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather??units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector('.weather').style.display = "none"
        document.querySelector('.error').style.display = "block"
    }else{
        const data = await response.json()

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c'
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%'
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/hr'

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'img/images/clouds.png'
        }else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'img/images/clear.png'
        }else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'img/images/drizzle.png'
        }else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'img/images/mist.png'
        }else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'img/images/rain.png'
        }else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'img/images/snow.png'
        }

        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = "none"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})


 

