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
            const weatherElement = document.getElementById("temperature")
            let weather = ""
            let userSelection = document.getElementById("selection").value
            switch(userSelection){
                case "c":
                    weather = weatherReportData.current.temp_c + "&deg; C"
                    break;
                case "f":
                    weather = weatherReportData.current.temp_f + "&deg; F"
            }
            locationElement.innerHTML = weatherReportData.location.name;
            weatherElement.innerHTML = weather
            // var weatherDiv = document.getElementById("weather");
            // weatherDiv.append(weatherInCelsius);
        }
    }
    xhr.send();
}