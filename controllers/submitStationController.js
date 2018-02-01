app.controller('submitStationController', function($scope, APIFactory) {

    $scope.createPendingStation = function(station){
        //todo: validate DATA!!!!!
        station.delete = 0;
        station.active = 0;
        station.user_entered = 1;
        APIFactory.UEAddStation(station).then(function (response){
            console.log(response.data.stations[0]);
            $scope.createNewStation = "";
            $scope.addStation = false;
            $scope.pendingStations.push(response.data.stations[0]);
            window.alert("Station Created");
            $route.reload();
        }, function (error){
            //todo... fix data
        });
    }


});
