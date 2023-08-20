const input_city = document.getElementById("input_city");
const btn_city = document.getElementById("btn_city");

const apiKey = "YOUR_API_KEY"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

btn_city.addEventListener("click", async () => {
    const city = input_city.value;
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);

    document.getElementById("temp").innerHTML = Math.round(data.main.temp);
    document.getElementById("city_temp").innerHTML = data.name;
    document.getElementById("min_temp").innerHTML = Math.round(data.main.temp_min);
    document.getElementById("max_temp").innerHTML = Math.round(data.main.temp_max);
    document.getElementById("humidity").innerHTML = data.main.humidity;
    document.getElementById("wind").innerHTML = data.wind.speed;
    document.getElementById("feel_like").innerHTML = Math.round(data.main.feels_like);
    document.getElementById("pressure").innerHTML = Math.round(data.main.pressure);
})