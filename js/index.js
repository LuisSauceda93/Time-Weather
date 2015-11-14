(
  function () {
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

      function getCoords(position) {
        var lat= position.coords.latitude;
        var lon= position.coords.longitude;
        sweetAlert("Tu posición es:\n"+lat+ " "+lon);
        // body...
      }
})();
