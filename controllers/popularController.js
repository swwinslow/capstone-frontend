app.controller('popularController', function($scope, APIFactory) {

  $scope.orderBySearch = '';
  $scope.orderByTerm = true;

  $scope.sortMethod = function(name){
    if($scope.orderBySearch == name){
      $scope.orderByTerm = !$scope.orderByTerm;
    } else {
      $scope.orderBySearch = name;
    }
  }


  APIFactory.getPopular().then(function (response){
      console.log(response.data.data);
      $scope.popularArray = response.data.data;
  });


});
