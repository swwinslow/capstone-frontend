app.controller('stationsController', function($scope, $timeout,  APIFactory, $rootScope) {

        $scope.showGeo = false;
        $scope.showGenre = false;
        $scope.showOwnership = false;
        $scope.showMe = false;

        $scope.showActive = true;
        $scope.showPending = true;
        $scope.showDeleted = true;

        $scope.myFun = function(){
          $scope.showMe = !$scope.showMe;
          console.log("helooo");
        }

        $scope.myFuncGeographical = function(){
          $scope.showGeo = !$scope.showGeo;
        }

        $scope.myFuncGenre = function(){
          $scope.showGenre = !$scope.showGenre;
        }

        $scope.myFuncOwnership = function(){
          $scope.showOwnership = !$scope.showOwnership;
        }

        APIFactory.getAllStations().then(function (response){
            $scope.activeStations = response.data.active;
            $scope.pendingStations = response.data.pending;
            $scope.deletedStations = response.data.deleted;
        });

        APIFactory.getInformation().then(function (response){
            // $scope.typeArray = response.data.types;
            // $scope.statesArray = response.data.genre;
            // $scope.genreArray = response.data.states;

            console.log(response.data.states);

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
});
