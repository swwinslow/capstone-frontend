app.factory('APIFactory', function($http){

  var data = {};
  var baseURL = "http://willshare.com/cs495/MidwestRadioPlayer/";

  data.getAllStations = function() {
    return $http.get(baseURL + 'GetAllStations.php');
  }

  data.getInformation = function() {
    return $http.get(baseURL + 'GetInformation.php');
  }
  return data;
});
