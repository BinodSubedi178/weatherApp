const searchButton = document.querySelector(".search-button");
const apiKey = "29d4c226f1b92fadac7e3c2a3740aab7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".top-i-search-bar input");

async function weatherCheck(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    if (response.status == 404){
        searchBox.value = "";
        searchBox.placeholder = "Invalid City!"
    }
    else{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = (`${Math.round(data.main.temp)} °C`)
    document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    let skyCond = data.weather[0].main
    let skyCondImg = document.getElementById("sky-cond-img");
    if ( skyCond == "Clear"){
        skyCondImg.src = "images/clear.png"
    }
    else if ( skyCond == "Drizzle"){
        skyCondImg.src = "images/drizzle.png"
    }
    else if ( skyCond == "Clouds"){
        skyCondImg.src = "images/clouds.png"
    }
    else if ( skyCond == "Mist"){
        skyCondImg.src = "images/mist.png"
    }
    else if ( skyCond == "Rain"){
        skyCondImg.src = "images/rain.png"
    }
    else if ( skyCond == "Snow"){
        skyCondImg.src = "images/snow.png"
    }
}
}
document.addEventListener('keydown',(event)=>{
    if(event.key === "Enter"){
        weatherCheck(searchBox.value);
    }
})
searchButton.addEventListener('click',()=>{
    weatherCheck(searchBox.value);
})