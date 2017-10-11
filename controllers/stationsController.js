app.controller('stationsController', function($scope, APIFactory) {
      console.log("hello");
        $scope.showMe = false;
        $scope.myFun = function(){
          $scope.showMe = !$scope.showMe;
          console.log("helooo");
        }

        APIFactory.getAllStations().then(function (response){
            console.log(response.data.data);
            $scope.data = response.data.data;
        });

        /// this is where the scripts are going

});
