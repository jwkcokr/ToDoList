const API_KEY ="92afe6e1f63369ad2ed47cdada989c1d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        weather.innerText =data.weather[0].main;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you. ")
}

navigator.geolocation.getCurrentPosition(onGeoOk , onGeoError);