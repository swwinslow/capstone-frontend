app.config(function ($routeProvider){
  $routeProvider.
  when('/', {
    controller: 'stationsController',
    templateURL: 'views/stations.html'
  }).
  when('/popular', {
    controller: 'popularController',
    templateURL: 'views/popular.html'
  }).
  otherwise({
    controller: 'stationsController',
    templateURL: 'views/404.html'
  });
});
