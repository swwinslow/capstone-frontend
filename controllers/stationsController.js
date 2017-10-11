app.controller('stationsController', function($scope) {
      console.log("hello");
        $scope.showMe = false;
        $scope.myFun = function(){
          $scope.showMe = !$scope.showMe;
          console.log("helooo");
        }

        // APIFactory.getAllStations().then(function (response){
        //     console.log(response);
        // });

        /// this is where the scripts are going

});
