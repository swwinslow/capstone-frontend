app.controller('stationsController', function($scope) {
      console.log("hello");
        $scope.showMe = false;
        $scope.myFun = function(){
          $scope.showMe = !$scope.showMe;
          console.log("helooo");
        }

        /// this is where the scripts are going

});
