app.controller('stationsController', function($scope, APIFactory) {
        $scope.showGenre = false;
        $scope.showOwnership = false;
        $scope.showGeographical = false;

        $scope.myFuncGenre = function(){
          $scope.showGenre = !$scope.showGenre;
        }

        $scope.myFuncOwnership = function(){
          $scope.showOwnership = !$scope.showOwnership;
        }

        $scope.myFuncGeographical = function(){
          $scope.showGeographical = !$scope.showGeographical;
        }

        APIFactory.getAllStations().then(function (response){
            console.log(response.data.data);
            $scope.data = response.data.active;
        });

        /// this is where the scripts are going

});
