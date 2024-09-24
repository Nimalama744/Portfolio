 

 const weatherForm = document.querySelector(".weatherForm");
 const cityInput = document.querySelector(".cityInput");
 const card = document.querySelector(".card");
 const apiKey = "a6e47e5738449e385ffa4df3318708d0";

 weatherForm.addEventListener("submit",async event => {

    event.preventDefault();

    const city = cityInput.value;

    if (city){
        try{ 
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    }
 });

 async function getWeatherData(city) {
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch (apiUrl);

    if (!response.ok){
        throw new Error("Could not fetch weather Data");
    }

    return await response.json();
 }

 function displayWeatherInfo(data){
   
    // instead of accesiing each data you can do and use directly
    const {name: city,
           main: {temp, humidity},
           weather: [{description, id}]} = data;  
    

    const cityName = document.createElement("p");
    cityName.classList.add("cityDisplay");
    cityName.textContent = data.name;

    const Temp = document.createElement("p");
    Temp.classList.add("tempDisplay");
    Temp.textContent = `${(temp - 273.15).toFixed(1)}°C`;

    const Humidity = document.createElement("p");
    Humidity.classList.add("humidityDisplay");
    Humidity.textContent = `Humidity: ${humidity}%`;

    const Description = document.createElement("p");
    Description.classList.add("descDisplay");
    Description.textContent = data.weather[0].description;

    const WeatherEmoji = document.createElement("p");
    WeatherEmoji.classList.add("weatherEmoji");
    WeatherEmoji.textContent = getWeatherEmoji(id);

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(cityName);
    card.appendChild(Temp);
    card.appendChild(Humidity);
    card.appendChild(Description);
    card.appendChild(WeatherEmoji);
 }

 function getWeatherEmoji(weatherId){

    switch (true){
        case (weatherId >= 200 && weatherId < 300) :
            return "⛈️ ";

        case (weatherId >= 300 && weatherId < 400) :
            return " 🌧️";  

        case (weatherId >= 500 && weatherId < 600) :
            return "🌧️ ";

        case (weatherId >= 600 && weatherId < 700) :
            return "❄️ ";

        case (weatherId >= 700 && weatherId < 800) :
            return "🌫️";

        case (weatherId == 800) :
            return "☀️ ";

        case (weatherId >= 801 && weatherId < 810) :
            return "☁️  ";

        default:
            return "❓";

    }
 }

 function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
 }