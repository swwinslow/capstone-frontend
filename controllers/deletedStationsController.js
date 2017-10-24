app.controller('deletedStationsController', function($scope, $timeout,  APIFactory, $rootScope) {

        $scope.showGeo = false;
        $scope.showGenre = false;
        $scope.showOwnership = false;
        $scope.showMe = false;
        $scope.showicon1 = true;
        $scope.showicon2 = false;
        $scope.showicon3 = false;
        $scope.showicon4 = true;
        $scope.showicon5 = false;
        $scope.showicon6 = true;

        $scope.showActive = true;
        $scope.showPending = false;
        $scope.showDeleted = false;

        $scope.addStation = false;

        $scope.orderBySearch = '';
        $scope.orderByTerm = true;

        $scope.myFun = function(){
          $scope.showMe = !$scope.showMe;
        }

        $scope.showAddStation = function(){
          $scope.addStation = true;
        }

        $scope.sortMethod = function(name){
          if($scope.orderBySearch == name){
            $scope.orderByTerm = !$scope.orderByTerm;
          } else {
            $scope.orderBySearch = name;
          }
        }

        $scope.myFuncGeographical = function(){
          $scope.showGeo = !$scope.showGeo;
          $scope.showicon1 = !$scope.showicon1;
          $scope.showicon2 = !$scope.showicon2;
        }

        $scope.myFuncGenre = function(){
          $scope.showGenre = !$scope.showGenre;
          $scope.showicon5 = !$scope.showicon5;
          $scope.showicon6 = !$scope.showicon6;
        }

        $scope.myFuncOwnership = function(){
          $scope.showOwnership = !$scope.showOwnership;
          $scope.showicon3 = !$scope.showicon3;
          $scope.showicon4 = !$scope.showicon4;
        }

        APIFactory.getAllStations().then(function (response){
            $scope.activeStations = response.data.active;
            $scope.pendingStations = response.data.pending;
            $scope.deletedStations = response.data.deleted;
        });

        $scope.editStation = function(id){
          for(var i = 0; i < $scope.deletedStations.length; i++){
            if($scope.deletedStations[i].id == id){
              $scope.deletedStations[i].edit = true;
            }
          }
         }

        APIFactory.getInformation().then(function (response){
            $scope.typeArray = [];
            $scope.stateArray = [];
            $scope.genreArray = [];

            for (var i = 0; i < response.data.types.length - 1; i++){
              $scope.typeArray.push(response.data.types[i].type);
            }

            for (var i = 0; i < response.data.genre.length - 1; i++){
              $scope.genreArray.push(response.data.genre[i].genre);
            }

            for (var i = 0; i < response.data.states.length - 1; i++){
              $scope.stateArray.push(response.data.states[i].state);
            }
        });

        $scope.updateStation = function(station){
          station.active = 0;
          station.delete = 1;
          for(var i = 0; i < $scope.deletedStations.length; i++){
            if($scope.deletedStations[i].id == station.id){
              $scope.deletedStations[i].edit = false;
            }
          }
          APIFactory.editStation(station).then(function (response){
              console.log(response);
          });

        }

        $scope.activeStation = function(id){
          for(var i = 0; i < $scope.deletedStations.length; i++){
            if($scope.deletedStations[i].id == id){
              var station = $scope.deletedStations[i];
              station.delete = 0;
              station.active = 1;
              APIFactory.editStation(station).then(function (response){
                  console.log(response);
              });
            }
          }
        }

        //KRISTEN: LOOOK AT THIS:::::
        //active = 1 delete = 0 >>>>>> active station
        //active = 0 delete = 0 >>>>> pending station
        //active = 1 or 0 delete = 1 >> delete station

});
