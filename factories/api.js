app.factory('APIFactory', function($http, $rootScope){

  var data = {};
  var baseURL = "http://willshare.com/cs495/MidwestRadioPlayer";

  data.getAllStations = function() {
    return $http.get(baseURL + 'XX BACKEND POINT / DATA XX');
  }


  data.getInformation = function() {
    return $http.get(baseURL + 'XX BACKEND POINT / DATA XX');
  }

  data.getPendingInformation = function() {
    return $http.get(baseURL + 'XX BACKEND POINT / DATA XX');
  }

  data.getDeletedInformation = function() {
    return $http.get(baseURL + 'XX BACKEND POINT / DATA XX');
  }

  data.getUserEnteredPendingInformation = function() {
    return $http.get(baseURL + 'XX BACKEND POINT / DATA XX');
  }

  data.getPopular = function(){
    return $http.get(baseURL + 'XX BACKEND POINT / DATA XX');
  }

  //method needed to format data
  function serializeData( data ) {
    // If this is not an object, defer to native stringification.
    if ( ! angular.isObject( data ) ) {
        return( ( data == null ) ? "" : data.toString() );
    }

    var buffer = [];

    // Serialize each key in the object.
    for ( var name in data ) {
        if ( ! data.hasOwnProperty( name ) ) {
            continue;
        }

        var value = data[ name ];

        buffer.push(
            encodeURIComponent( name ) + "=" + encodeURIComponent( ( value == null ) ? "" : value )
        );
    }

    // Serialize the buffer and clean it up for transportation.
    var source = buffer.join( "&" ).replace( /%20/g, "+" );
    return( source );
    }

    data.reportStation = function (data) {
        return $http({
            method: "POST",
            url: baseURL + 'XX BACKEND POINT / DATA XX',
            data: serializeData ({
                //XX BACKEND POINT / DATA XX
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

  data.editStation = function (station) {
      console.log($rootScope.userSessionId);
      console.log($rootScope.userSessionKey);
      console.log('asdf');

      return $http({
            method: "POST",
            url: baseURL + 'XX BACKEND POINT / DATA XX',
            data: serializeData ({
                //XX BACKEND POINT / DATA XX
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

    data.createStation = function (station) {
          return $http({
              method: "POST",
              url: baseURL + 'XX BACKEND POINT / DATA XX',
              data: serializeData ({
                  //XX BACKEND POINT / DATA XX
              }),
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
      }

    data.UEAddStation = function (station) {
        return $http({
            method: "POST",
            url: baseURL + 'XX BACKEND POINT / DATA XX',
            data: serializeData ({
                    // XX BACKEND POINT / DATA XX
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    data.changeFirstStation = function (station) {
        return $http({
            method: "POST",
            url: baseURL + 'XX BACKEND POINT / DATA XX',
            data: serializeData ({
                    // XX BACKEND POINT / DATA XX
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
      data.DeleteStationForever = function (id) {
            return $http({
                method: "POST",
                url: baseURL + 'XX BACKEND POINT / DATA XX',
                data: serializeData ({
                        // XX BACKEND POINT / DATA XX
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        }

        data.checkSession = function () {
              return $http({
                  method: "POST",
                  url: baseURL + 'XX BACKEND POINT / DATA XX',
                  data: serializeData ({
                          // XX BACKEND POINT / DATA XX
                  }),
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                  }
              });
          }
    return data;
});
