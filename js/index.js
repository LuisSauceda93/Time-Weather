(
  function () {
var API_WEATHER_KEY= "a5dbaad62fe7199046e6c6dbf005c544";
var API_WEATHER_URL= "http://api.openweathermap.org/data/2.5/weather?APPID=" + API_WEATHER_KEY + "&";
var IMG_WEATHER = "http://openweathermap.org/img/w/";

var cityWeather = {};
cityWeather.zone;
cityWeather.icon;
cityWeather.temp;
cityWeather.temp_max;
cityWeather.temp_min;
cityWeather.main;


    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(getCoords, errorFound);
    }else {
        sweetAlert("Tu navegador no soporta Geolocalizacion");
      }

      function errorFound(error) {
        //alert("Un error ocurrio: "+ error.code);
        if(error.code==0){
          swal("Error desconocido", "Lo sentimos intente nuevamente!", "error");}

        if(error.code==1){
          swal("Permiso denegado", "Lo sentimos intente nuevamente!", "error");}

        if(error.code==2){
          swal("Posición no disponible", "Lo sentimos intente nuevamente!", "error");}

        if(error.code==3){
          swal("Timeout", "Lo sentimos intente nuevamente!", "error");}

        //0: Error desconocido
        //1: Permiso denegado
        //2: Posicion no disponible
        //3: Timeout
      };

      function getCoords (position){
        var lat= position.coords.latitude;
        var lon= position.coords.longitude;
        //sweetAlert("Tu posición es:\n"+lat+ ", "+lon);
        console.log("Tu posición es:\n"+lat+ ", "+lon);
        $.getJSON(API_WEATHER_URL + "lat= "+ lat + "&lon=" + lon, getCurrentWeather);
        };
        function getCurrentWeather(data) {

          cityWeather = {};
          cityWeather.zone=data.name;
          cityWeather.icon=IMG_WEATHER + data.weather[0].icon + ".png";
          cityWeather.temp=data.main.temp - 273.15;
          cityWeather.temp_max=data.main.temp_max - 273.15;
          cityWeather.temp_min=data.main.temp_min - 273.15;
          cityWeather.main=data.weather[0].main;

          renderTemplate();

        };
        function activateTemplate(id) {
              var t = document.querySelector(id);
              return document.importNode(t.content, true);
        };

        function renderTemplate() {
            var clone = activateTemplate("#template--city");
            //clone.querySelector("[data-time]").innerHTML = ;
            clone.querySelector("[data-city]").innerHTML = cityWeather.zone;
            $("body").append(clone);
        };


})();
