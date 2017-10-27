app.controller('pendingStationsController', function($scope, $timeout,  APIFactory, $rootScope) {

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
        $scope.orderByTerm = false;

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
            $scope.orderByTerm = false;
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

            console.log(response);
            for(var i = 0; i < $scope.pendingStations.length; i++){
                $scope.pendingStations[i].edit = true;
            }
        });

        $scope.editStation = function(id){
          for(var i = 0; i < $scope.pendingStations.length; i++){
            if($scope.pendingStations[i].id == id){
              $scope.pendingStations[i].edit = false;
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
          station.delete = 0;
          for(var i = 0; i < $scope.pendingStations.length; i++){
            if($scope.pendingStations[i].id == station.id){
              $scope.pendingStations[i].edit = true;
            }
          }
          APIFactory.editStation(station).then(function (response){
              console.log(response);
          });
        }

        $scope.deleteStation = function(id) {
          for(var i = 0; i < $scope.pendingStations.length; i++){
            if($scope.pendingStations[i].id == id){
              var station = $scope.pendingStations[i];
              station.delete = 1;
              station.active = 0;
              APIFactory.editStation(station).then(function (response){
                  console.log(response);
              });
            }
          }
        };

        $scope.activateStation = function(id) {
          for(var i = 0; i < $scope.pendingStations.length; i++){
            if($scope.pendingStations[i].id == id){
              var station = $scope.pendingStations[i];
              station.delete = 0;
              station.active = 1;
              APIFactory.editStation(station).then(function (response){
                  console.log(response);
              });
            }
          }
        };

        $scope.createPendingStation = function(station){
          console.log('lol');
          station.delete = 0;
          station.active = 0;
          APIFactory.createStation(station).then(function (response){
              console.log(response);
          });
        }
});
