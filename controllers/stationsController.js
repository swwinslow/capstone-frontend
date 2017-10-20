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

        $scope.orderBySearch = '';
        $scope.orderByTerm = true;

        $scope.deleteStation = function ($index, station) {
          $scope.activeStations.splice($index, 1);
        };

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
