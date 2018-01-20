app.controller('reportController', function($scope, APIFactory) {

  APIFactory.getAllStations().then(function (response){
      $scope.allActiveStations = response.data.active;
      $scope.activeStations = response.data.active;

      for(var i = 0; i < $scope.activeStations.length; i++){
          $scope.activeStations[i].edit = true;
      }
  });

  $scope.showActive = true;

});
