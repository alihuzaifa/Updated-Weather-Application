// function
const enterBtn = document.querySelector(".enter")
// Variables
let inputData = document.querySelector(".search-box");
const tempreature = document.querySelector(".tempreature")
const city = document.querySelector(".city");
const weather_condition = document.querySelector(".weather-condition");
const min = document.querySelector(".min");
const humidity = document.querySelector(".humidity");
const max = document.querySelector(".max");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
const visibility = document.querySelector(".visible");
const navbar = document.querySelector("#result-box")
let showData = () => {
    event.preventDefault()
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=509fbec997d1d77a5c3314068a4f1d9b&q=${inputData.value.toLowerCase()}`)
        .then(function (response) {
            if(response.data.weather[0].main == "Smoke"){
                document.body.style.backgroundImage = "url('Images/smoke.webp')";
            }
            else if(response.data.weather[0].main == "Haze"){
                document.body.style.backgroundImage = "url('Images/haze.png')";
            }
            else if(response.data.weather[0].main == "Clouds"){
                document.body.style.backgroundImage = "url('Images/cloudy.jpg')";
            }
            else if(response.data.weather[0].main == "Clear"){
                document.body.style.backgroundImage = "url('Images/clear.jpg')";
            }
            console.log(response.data)
            let data = response.data;
            tempreature.innerHTML = `${data.main.temp} °C`;
            city.innerHTML = data.name;
            weather_condition.innerHTML = data.weather[0].main
            min.innerHTML = data.main.temp_min;
            max.innerHTML = data.main.temp_max;
            humidity.innerHTML = data.main.humidity;
            wind.innerHTML = data.wind.speed;
            pressure.innerHTML = `${data.main.pressure}`;
            visibility.innerHTML = data.visibility;
        })
        .catch(function (error) {
            console.log(error);
        })
    inputData.value = ""
}
enterBtn.addEventListener("click", showData)

let count = 1;
const changeColor = () => {
    count++
    const result_box = document.getElementById("result-box")
    if (count === 1) {
        result_box.classList.remove("bg-light");
        result_box.classList.remove("text-dark");
        result_box.classList.add("bg-dark");
        result_box.classList.add("text-light");
        navbar.classList.remove("bg-light")
        navbar.classList.remove("text-dark")
        navbar.classList.add("bg-dark")
        navbar.classList.add("text-light")


    }
    else if(count === 2){
        result_box.classList.remove("bg-dark");
        result_box.classList.remove("text-light");
        result_box.classList.add("bg-light");
        result_box.classList.add("text-dark");
        navbar.classList.remove("bg-dark");
        navbar.classList.remove("text-light");
        navbar.classList.add("bg-light");
        navbar.classList.add("text-dark");
    }
    if(count === 2){
        count = 0;
    }
}


let color_changer = document.getElementById("color-changer");
color_changer.addEventListener("click", changeColor)

