app.factory('APIFactory', function($http){

  var data = {};
  var baseURL = "http://willshare.com/cs495/MidwestRadioPlayer/";

  data.getAllStations = function() {
    return $http.get(baseURL + 'selectItems.php');
  }
  return data;
});
