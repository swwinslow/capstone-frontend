app.controller('showStationsController', function($scope, APIFactory, $route) {

    APIFactory.getAllStations().then(function (response){
        $scope.allActiveStations = response.data.active;
        $scope.activeStations = response.data.active;

        for(var i = 0; i < $scope.activeStations.length; i++){
            $scope.activeStations[i].edit = true;
        }
    });

    APIFactory.getPopular().then(function (response){
        console.log(response.data.data);
        $scope.popularArray = response.data.data;
    });



});
