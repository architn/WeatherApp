function onSearch(){
    var xhr = new XMLHttpRequest();
    var searchParameter = document.getElementById("search-bar").value;
    var query = "http://api.weatherapi.com/v1/current.json?key=769cc7c714f14cdf971232326220303&q="+searchParameter+"&aqi=no"
    xhr.open('GET', query, true);
    
    xhr.onload = (e) => {
        if(xhr.status == 200){
            console.log("Success");
            let weatherReportData = JSON.parse(xhr.responseText);
            let weatherSection = document.getElementById("weather-section");
            weatherSection.style.display = "block";
            console.log(weatherReportData);
            const locationElement = document.getElementById("location")
            const temperatureElement = document.getElementById("temperature")
            const conditionElement = document.getElementById("condition")
            const windSpeedElement = document.getElementById("wind-speed")
            const humidityElement = document.getElementById("humidity")
            const pressureElement = document.getElementById("pressure")
            const feelsLikeElement = document.getElementById("feels-like")
            const visibilityElement = document.getElementById("visibility")
            const cloudyElement = document.getElementById("cloud")
            const precipitationElement = document.getElementById("precipitation")
            const uvElement = document.getElementById("uv")
            
            let temperature = ""
            let feelsLike = ""
            let userSelection = document.getElementById("selection").value
            switch(userSelection){
                case "c":
                    temperature = weatherReportData.current.temp_c + "&deg; C"
                    feelsLike = weatherReportData.current.feelslike_c + "&deg; C"
                    break;
                case "f":
                    temperature = weatherReportData.current.temp_f + "&deg; F"
                    feelsLike = weatherReportData.current.feelslike_f + "&deg; F"
            }
            locationElement.innerHTML = weatherReportData.location.name + ", "+ weatherReportData.location.region;
            conditionElement.innerHTML = weatherReportData.current.condition.text
            temperatureElement.innerHTML = temperature;
            $("#imageElement").css("src", weatherReportData.current.condition.icon);
            windSpeedElement.innerHTML = "<strong>Wind Speed:</strong> "+ weatherReportData.current.wind_mph + " mph" + "/ " + weatherReportData.current.wind_kph + " kph"
            humidityElement.innerHTML = "<strong>Humidity:</strong> "+ weatherReportData.current.humidity + "%" 
            pressureElement.innerHTML = "<strong>Pressure:</strong> "+ weatherReportData.current.pressure_mb + " mb" + "/ "+ weatherReportData.current.pressure_in + " in"
            feelsLikeElement.innerHTML = "<strong>Feels Like:</strong> "+feelsLike
            visibilityElement.innerHTML = "<strong>Visibility:</strong> "+ weatherReportData.current.vis_km + " km/ " + weatherReportData.current.vis_miles + " miles"
            precipitationElement.innerHTML =  "<strong>Precipitation:</strong> "+ weatherReportData.current.precip_mm + " mm/ " + weatherReportData.current.precip_in + " in"
            cloudyElement.innerHTML = "<strong>Clouds:</strong> "+ weatherReportData.current.cloud + " %"
            uvElement.innerHTML = "<strong>UV Radiation:</strong> "+weatherReportData.current.uv + " - Very Good"
        }
    }
    xhr.send();
}