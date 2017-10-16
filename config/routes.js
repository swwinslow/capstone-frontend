app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "views/stations.html",
      controller : "stationsController"
  })
  .when("/stations", {
      templateUrl : "views/stations.html",
      controller : "stationsController"
  })
  .when("/popular", {
      templateUrl : "views/popular.html",
      controller: "popularController"
  })
  .otherwise({
    templateUrl : "views/404.html",
    controller: "404Controller"
  });
}]);
