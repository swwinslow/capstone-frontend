app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "views/activeStations.html",
      controller : "activeStationsController"
  })
  .when("/pending", {
      templateUrl : "views/pendingStations.html",
      controller : "pendingStationsController"
  })
  .when("/deleted", {
      templateUrl : "views/deletedStations.html",
      controller : "deletedStationsController"
  })
  .when("/popular", {
      templateUrl : "views/popular.html",
      controller: "popularController",

  })
  .otherwise({
    templateUrl : "views/404.html",
    controller: "404Controller"
  });
}]);

var isAuthenticated = function ($rootScope, $location, sessionService,) {
    var session = sessionService.hasRecentSession();
    if (session) {
        $rootScope.isLoggedIn = true;

        UserFactory.getAuth().then(function (response){
            var data = response.data.data;
            if (data.auth_level == 1){
                $rootScope.AuthUser = true;
            } else {
                $rootScope.AuthUser = false;
            }
        }, function(error){
            window.alert('Network Error. Please try again.');
            $location.path('/');
        });
        return true;
    } else {
        $rootScope.redirect = $location.path();
        $location.path("/login");
    }
};
