app.config(['$routeProvider', function($routeProvider, sessionService) {
  $routeProvider
  .when("/", {
      templateUrl : "views/activeStations.html",
      controller : "activeStationsController",
      resolve: {
        'data': isAuthenticated
      }
  })
  .when("/pending", {
      templateUrl : "views/pendingStations.html",
      controller : "pendingStationsController",
      resolve: {
          'data': isAuthenticated
      }
  })
  .when("/first", {
      templateUrl : "views/first.html",
      controller : "firstStationController",
      resolve: {
          'data': isAuthenticated
      }
   })
  .when("/deleted", {
      templateUrl : "views/deletedStations.html",
      controller : "deletedStationsController",
      resolve: {
        'data': isAuthenticated
      }
  })
  .when("/popular", {
      templateUrl : "views/popular.html",
      controller: "popularController",
      resolve: {
          'data': isAuthenticated
      }
  })
  .when("/stations", {
       templateUrl : "views/showStations.html",
       controller: "showStationsController",

  })
  .when("/submit", {
      templateUrl : "views/submit.html",
      controller: "submitStationController"
  })
  .when("/report", {
      templateUrl : "views/report.html",
      controller: "reportController"
  })
  .otherwise({
    templateUrl : "views/404.html",
    controller: "404Controller"
  });
}]);

var isAuthenticated = function ($rootScope, $location, sessionService, APIFactory) {
    var session = sessionService.hasRecentSession();
    if (session) {

        $rootScope.isLoggedIn = true;
        // //API FACTORY CALL
        APIFactory.checkSession().then(function (response){
        }, function(error){
          $rootScope.redirect = $location.path();
          window.location = "http://willshare.com/cs495/admin/frontend/#/"
        });

    } else {
        $rootScope.redirect = $location.path();
        $location.path("/login");
    }
};
