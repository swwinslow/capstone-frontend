app.controller('submitStationController', function($scope, APIFactory, $route) {

    $scope.createPendingStation = function(station){
        //todo: validate DATA!!!!!
        station.delete = 0;
        station.active = 0;
        station.user_entered = 1;
        APIFactory.UEAddStation(station).then(function (response){
            console.log(response.data.stations[0]);
            $scope.createNewStation = "";
            $scope.addStation = false;
            window.alert("Station Created. Thanks for submitting");
            $route.reload();
        }, function (error){
            //todo... fix data
        });
    }


});
