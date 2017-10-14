app.controller('popularController', function($scope, APIFactory) {

  APIFactory.getPopular().then(function (response){
      console.log(response.data.data);
      $scope.popularArray = response.data.data;
  });


});
