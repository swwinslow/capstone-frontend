app.controller('firstStationController', function($scope, APIFactory, $route) {


            APIFactory.getAllStations().then(function (response){
                $scope.activeStations = response.data.active;
                for(var i  = 0; i < $scope.activeStations.length; i++){
                    if($scope.activeStations[i].first_station == 1){
                        $scope.selectStation = $scope.activeStations[i].short_name;
                        console.log($scope.selectStation);
                    }
                }
            });

            $scope.saveNewStation = function(){
                if($scope.xyz == undefined){
                    window.alert('error');
                } else {
                    console.log($scope.xyz);
                    APIFactory.changeFirstStation($scope.xyz).then(function (response){
                       window.alert("Changed First Station");
                        $route.reload();
                    });
                }
            }



            $scope.showSelectValue = function (value){
                $scope.xyz = value;
                console.log($scope.xyz);
            }




});
