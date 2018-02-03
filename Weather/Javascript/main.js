
var header = document.getElementById("header");

var weather = document.getElementById("Weather");

var latitude;
var longitude;
var coordinates = document.getElementById("coordinates");


function success(position) {
     latitude = position.coords.latitude;
     longitude = position.coords.longitude;
        getWeatherByCoordinates(latitude, longitude);
    };
    //else {
    //    //Write Code to alternatively show a Zip-Code Search Box;
    //};


navigator.geolocation.getCurrentPosition(success);
var city = document.getElementById("city");
var weatherDescription = document.getElementById("weather-description");
var roundTempF;
var roundTempC;
var tempNum;
var tempStringFFull

function getWeatherByCoordinates(latitude, longitude) {
    
    var fullURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=75ed54453a6e806917cfa439b3fb1dd9&units=imperial";

    $.getJSON(fullURL, function (data) {
        
        var tempString = data.main.temp;
        tempNum = parseInt(tempString);
        roundTempF = Math.floor(tempNum);
        stringF = roundTempF.toString();
        tempStringFFull = stringF + "\xB0" + " F";
        $("#checking-weather").hide();
        weather.innerText = tempStringFFull;
        city.innerText = data.name;
        weatherDescription.innerText = data.weather[0].description;

        if (data.dt > data.sys.sunrise && data.dt < data.sys.sunset) {
            $("#whole-page").removeClass("whole");
            $("#whole-page").removeClass("night");
            $("#whole-page").addClass("day");
            $(".btn").removeClass("night-buttons");
            $(".btn").addClass("day-buttons");
        }
        else {
                $("#whole-page").removeClass("whole");   //comment this code block back in later
                $("#whole-page").removeClass("day");
                $("#whole-page").addClass("night");
                $(".btn").removeClass("day-buttons");
                $(".btn").addClass("night-buttons");
        };

            event.preventDefault();
    });
};



function typeConversion() {
    if (changeTempType.innerText === "Celsius") {
        var tempStringC;
        var celsiusDecimal = (tempNum - 32) * (5 / 9);
        roundTempC = Math.floor(celsiusDecimal);
        tempStringC = roundTempC.toString();
        tempStringC += "\xB0" + " C";
        weather.innerText = tempStringC;
        changeTempType.innerText = "Farenheit";
        return;
    }
    else if (changeTempType.innerText === "Farenheit") {
        weather.innerText = tempStringFFull;
        changeTempType.innerText = "Celsius";
        return;
    }
    else {
        weather.innerText = "We are unable to retrieve the weather at this time.  Please try again later";
        changeTempType.innerText = "Celsius";
        return;
    };
};

var changeTempType = document.getElementById("change-temp-type");

changeTempType.addEventListener("click", typeConversion, false);

var zipCode = document.getElementById("Zip-Code");


function getWeatherByZip()  {
    var fullURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode.value + "&APPID=75ed54453a6e806917cfa439b3fb1dd9&units=imperial";

    $.getJSON(fullURL, function (data) {

        var tempString = data.main.temp;
        tempNum = parseInt(tempString);
        roundTempF = Math.floor(tempNum);
        stringF = roundTempF.toString();
        tempStringFFull = stringF + "\xB0" + " F";
        weather.innerText = tempStringFFull;
        city.innerText = data.name;
        weatherDescription.innerText = data.weather[0].description;
        changeTempType.innerText = "Celsius";


        if (data.dt > data.sys.sunrise && data.dt < data.sys.sunset) {
            $("#whole-page").removeClass("whole");
            $("#whole-page").removeClass("night");
            $(".btn").addClass("day-buttons");
            $(".btn").removeClass("night-buttons");
            $("#whole-page").addClass("day");
        }
        else {
            $("#whole-page").removeClass("whole");
            $("#whole-page").removeClass("day");
            $("#whole-page").addClass("night");
            $(".btn").removeClass("day-buttons");
            $(".btn").addClass("night-buttons");
        };

        event.preventDefault();
    });

    };

var submitButton = document.getElementById("submit-zip");
submitButton.addEventListener("click", getWeatherByZip, false);


