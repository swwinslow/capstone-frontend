app.controller('popularController', function($scope, APIFactory) {


  $scope.orderBySearch = '';
  $scope.orderByTerm = false;

  $scope.sortMethod = function(name){
    if($scope.orderBySearch == name){
      $scope.orderByTerm = !$scope.orderByTerm;
    } else {
      $scope.orderBySearch = name;
      $scope.orderByTerm = false;
    }
  }


  APIFactory.getPopular().then(function (response){
      console.log(response.data.data);
      $scope.popularArray = response.data.data;
  });

  $scope.orderByFunction = function(x){
      return parseInt(x.votes);
  };

  $scope.sortFunc = function(votes){
    console.log('lol');

      $scope.orderBySearch = '-votes';
      $scope.orderByTerm = true;

  }



});
