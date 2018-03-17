app.factory('APIFactory', function($http, $rootScope){

  var data = {};
  var baseURL = "http://willshare.com/cs495/MidwestRadioPlayer";

  data.getAllStations = function() {
    return $http.get(baseURL + '/GetAllStations.php');
  }


  data.getInformation = function() {
    return $http.get(baseURL + '/GetInformation.php');
  }

  data.getPendingInformation = function() {
    return $http.get(baseURL + '/GetPendingInformation.php');
  }

  data.getDeletedInformation = function() {
    return $http.get(baseURL + '/GetDeletedInformation.php');
  }

  data.getUserEnteredPendingInformation = function() {
    return $http.get(baseURL + '/GetUEPendingStations.php');
  }

  //

  data.getPopular = function(){
    return $http.get(baseURL + '/GetAllPopular.php');
  }

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
            url: baseURL + '/ReportStation.php',
            data: serializeData ({
                "long_name"    : data.long_name,
                "broken"       : data.broken,
                "comment"    : data.comment
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
            url: baseURL + '/EditSingleStation.php',
            data: serializeData ({
                "short_name"    : station.short_name,
                "long_name"     : station.long_name,
                "frequency"     : station.frequency,
                "city"          : station.city,
                "state"         : station.state,
                "slogan"        : station.slogan,
                "type"          : station.type,
                "genre"         : station.genre,
                "stream"        : station.stream,
                "website"        : station.website,
                "id"            : station.id,
                "active"        : station.active,
                "delete"        : station.delete,
                "user_entered"  : station.user_entered,
                "session_id"    : $rootScope.userSessionId,
                "session_key"   : $rootScope.userSessionKey
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

    data.createStation = function (station) {
          return $http({
              method: "POST",
              url: baseURL + '/AddStation.php',
              data: serializeData ({
                  "short_name"    : station.short_name,
                  "long_name"     : station.long_name,
                  "frequency"     : station.frequency,
                  "city"          : station.city,
                  "state"         : station.state,
                  "slogan"        : station.slogan,
                  "stream"        : station.stream,
                  "website"       : station.website,
                  "type"          : station.type,
                  "genre"         : station.genre,
                  "active"        : station.active,
                  "user_entered"  : 0,
                  "session_id"    : $rootScope.userSessionId,
                  "session_key"   : $rootScope.userSessionKey
              }),
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
      }

    data.UEAddStation = function (station) {
        return $http({
            method: "POST",
            url: baseURL + '/UEAddStation.php',
            data: serializeData ({
                "short_name"    : station.short_name,
                "long_name"     : station.long_name,
                "frequency"     : station.frequency,
                "city"          : station.city,
                "state"         : station.state,
                "slogan"        : station.slogan,
                "stream"        : station.stream,
                "type"          : station.type,
                "genre"         : station.genre,
                "website"       : station.website,
                "active"        : station.active,
                "user_entered"  : 1
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    data.changeFirstStation = function (station) {
        return $http({
            method: "POST",
            url: baseURL + '/ChagneFirstStation.php',
            data: serializeData ({
                "id"    : station.id,
                "session_id"    : $rootScope.userSessionId,
                "session_key"   : $rootScope.userSessionKey
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
      data.DeleteStationForever = function (id) {
            return $http({
                method: "POST",
                url: baseURL + '/DeleteStationForever.php',
                data: serializeData ({
                    "id"    : id,
                    "session_id"    : $rootScope.userSessionId,
                    "session_key"   : $rootScope.userSessionKey
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        }

        data.checkSession = function () {
              return $http({
                  method: "POST",
                  url: baseURL + '/SessionCheck.php',
                  data: serializeData ({
                    "session_id"    : $rootScope.userSessionId,
                    "session_key"   : $rootScope.userSessionKey
                  }),
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                  }
              });
          }
    return data;
});
