app.controller('reportController', function($scope, APIFactory) {

  APIFactory.getAllStations().then(function (response){
      $scope.allActiveStations = response.data.active;
      $scope.activeStations = response.data.active;

      for(var i = 0; i < $scope.activeStations.length; i++){
          $scope.activeStations[i].edit = true;
      }
  });

  $scope.showActive = true;

  $scope.reportStation = function (data) {
      //long_name
      //broken
      //comment

      if(data == undefined || data.long_name == undefined || data.broken == undefined || data.comment == undefined){
          window.alert("Please fill in all the fileds to the site");
      }

      APIFactory.reportStation(data).then(function (response){
          window.alert("Thanks. The information has been sent.")
      });


  }

});
