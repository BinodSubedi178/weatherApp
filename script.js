const apiKey = "29d4c226f1b92fadac7e3c2a3740aab7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".top-i-search-bar input");
const searchButton = document.querySelector(".search-button");

async function weatherCheck(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = (`${Math.round(data.main.temp)} °C`)
    document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    let skyCond = data.weather[0].main
    let sunIcon = document.getElementById("sun-icon")
}


searchButton.addEventListener('click',()=>{
    weatherCheck(searchBox.value);
})