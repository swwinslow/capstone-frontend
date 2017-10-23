app.controller('stationsController', function($scope, $timeout,  APIFactory, $rootScope) {

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

        $scope.showActiveFunc = function(){
          $scope.showActive = true;
          $scope.showPending = false;
          $scope.showDeleted = false;
        }

        $scope.showPendingFunc = function(){
          $scope.showActive = false;
          $scope.showPending = true;
          $scope.showDeleted = false;
        }

        $scope.showDeletedFunc = function(){
          $scope.showActive = false;
          $scope.showPending = false;
          $scope.showDeleted = true;
        }

        $scope.showAddStation = function(){
          $scope.addStation = true;
        }

        $scope.sortMethod = function(name){
          console.log('lol');
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

            for(var i = 0; i < $scope.activeStations.length; i++){
                $scope.activeStations[i].edit = true;
            }
        });

        $scope.editStation = function(id){
          for(var i = 0; i < $scope.activeStations.length; i++){
            if($scope.activeStations[i].id == id){
              $scope.activeStations[i].edit = false;
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
          station.active = 1;
          station.delete = 0;
          APIFactory.editStation(station).then(function (response){
              console.log(response);
          });

        }

        $scope.deleteStation = function(id) {
          for(var i = 0; i < $scope.activeStations.length; i++){
            if($scope.activeStations[i].id == id){
              var station = $scope.activeStations[i];
              station.delete = 1;
              station.active = 0;
              APIFactory.editStation(station).then(function (response){
                  console.log(response);
              });
            }
          }
        };

        //KRISTEN: LOOOK AT THIS:::::
        //active = 1 delete = 0 >>>>>> active station
        //active = 0 delete = 0 >>>>> pending station
        //active = 1 or 0 delete = 1 >> delete station

});
