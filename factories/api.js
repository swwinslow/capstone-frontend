app.factory('APIFactory', function($http){

  var data = {};
  var baseURL = "http://willshare.com/cs495/MidwestRadioPlayer";

  data.getAllStations = function() {
    return $http.get(baseURL + '/GetAllStations.php');
  }

  data.getInformation = function() {
    return $http.get(baseURL + '/GetInformation.php');
  }

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

  data.editStation = function (station) {
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
                "id"            : station.id,
                "active"        : station.active,
                "delete"        : station.delete
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

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
                  "type"          : station.type,
                  "genre"         : station.genre,
                  "active"        : station.active
              }),
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          });
      }

      data.DeleteStationForever = function (station) {
            return $http({
                method: "POST",
                url: baseURL + '/DeleteStationForever.php',
                data: serializeData ({
                    "id"    : station.id
                }),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        }



  return data;
});
