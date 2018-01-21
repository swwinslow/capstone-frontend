app.controller('deletedStationsController', function($scope, $timeout,  APIFactory, $rootScope, $route) {

        $scope.showGeo = false;
        $scope.showGenre = false;
        $scope.showOwnership = false;
        $scope.showMe = false;
        $scope.showicon1 = true;
        $scope.showicon2 = false;
        $scope.showicon3 = false;
        $scope.showicon4 = true;
        $scope.showicon5 = false;
        $scope.showicon6 = true;

        $scope.showActive = true;
        $scope.showPending = false;
        $scope.showDeleted = false;

        $scope.addStation = false;

        $scope.orderBySearch = '';
        $scope.orderByTerm = false;

        $scope.selectedGenres = [];
        $scope.selectedOwnership = [];
        $scope.selectedGeo = [];

        $scope.selectedGenreData = [];
        $scope.selectedTypeData = [];
        $scope.selectedStateData = [];

        $scope.firstTimeGeo = false;

        $scope.addGenre = function (genre){

          var found = false;
          console.log($scope.selectedGenreData.length);

          if($scope.selectedGenreData.length == $scope.genreArray.length){
            console.log($scope.firstTimeGeo);
            if($scope.firstTimeGeo == false){
              $scope.firstTimeGeo = true;
              $scope.selectedGenreData = [];
              $scope.selectedGenreData.push(genre);
            } else {

            }

          } else {
            var count = $scope.firstTimeGeo = true;
            $scope.selectedGenreData = [];
            $scope.selectedGenreData.push(genre);
            var found2 = false
            for(var i = 0; i < $scope.selectedGenreData.length; i++){
              //removing the object
              if($scope.selectedGenreData[i] == genre){
                //if the count is dropping to 0, then refill with the orginal
                if(count == 1){
                  $scope.selectedGenreData = $scope.genreArray;
                  found2 = true;
                } else {
                  $scope.selectedGenreData.splice(i,1);
                  found2 = true;
                }
              }
            }
            if(found2 == false){
              $scope.selectedGenreData.push(genre);
            }
          }
        };

        $scope.addGeo = function (geo){
          var found = false;

          if($scope.selectedStateData.length == $scope.stateArray.length){
            $scope.selectedStateData = [];
            $scope.selectedStateData.push(geo);
          } else {
            var count = $scope.selectedStateData.length;
            for(var i = 0; i < $scope.selectedStateData.length; i++){
              //removing the object
              var found2 = false
              if($scope.selectedStateData[i] == geo){
                //if the count is dropping to 0, then refill with the orginal
                if(count == 1){
                  $scope.selectedStateData = $scope.stateArray;
                  found2 = true;
                } else {
                  $scope.selectedStateData.splice(i,1);
                  found2 = true;
                }
              }
            }
            if(found2 == false){
              $scope.selectedStateData.push(geo);
            }
          }
        };


        $scope.addOwnership = function (ownership){
          var found = false;


          if($scope.selectedTypeData.length == $scope.typeArray.length){
            $scope.selectedTypeData = [];
            $scope.selectedTypeData.push(ownership);
          } else {
            var count = $scope.selectedTypeData.length;
            for(var i = 0; i < $scope.selectedTypeData.length; i++){
              //removing the object
              var found2 = false
              if($scope.selectedTypeData[i] == ownership){
                //if the count is dropping to 0, then refill with the orginal
                if(count == 1){
                  $scope.selectedTypeData = $scope.typeArray;
                  found2 = true;
                }  else {
                  $scope.selectedTypeData.splice(i,1);
                  found2 = true;
                }
              }
            }
            if(found2 == false){
              $scope.selectedTypeData.push(ownership);
            }
          }
        };

        $scope.myFun = function(){
          $scope.showMe = !$scope.showMe;
        }

        $scope.showAddStation = function(){
          $scope.addStation = true;
        }

        $scope.sortMethod = function(name){
          if($scope.orderBySearch == name){
            $scope.orderByTerm = !$scope.orderByTerm;
          } else {
            $scope.orderBySearch = name;
            $scope.orderByTerm = false;
          }
        }

        $scope.myFuncGeographical = function(){
          $scope.showGeo = !$scope.showGeo;
          $scope.showicon1 = !$scope.showicon1;
          $scope.showicon2 = !$scope.showicon2;
        }

        $scope.myFuncGenre = function(){
          $scope.showGenre = !$scope.showGenre;
          $scope.showicon5 = !$scope.showicon5;
          $scope.showicon6 = !$scope.showicon6;
        }

        $scope.myFuncOwnership = function(){
          $scope.showOwnership = !$scope.showOwnership;
          $scope.showicon3 = !$scope.showicon3;
          $scope.showicon4 = !$scope.showicon4;
        }

        APIFactory.getAllStations().then(function (response){
            $scope.activeStations = response.data.active;
            $scope.pendingStations = response.data.pending;
            $scope.deletedStations = response.data.deleted;
        });

        $scope.editStation = function(id){
          for(var i = 0; i < $scope.deletedStations.length; i++){
            if($scope.deletedStations[i].id == id){
              $scope.deletedStations[i].edit = true;
            }
          }
         }

        APIFactory.getDeletedInformation().then(function (response){
          $scope.typeArray = [];
          $scope.stateArray = [];
          $scope.genreArray = [];

          $scope.yyy = [];
          for (var i = 0; i < response.data.types.length; i++){
            if(response.data.types[i].type != ""){
              if(i == 0){
                $scope.yyy.push(response.data.types[i].type);
                $scope.typeArray.push(response.data.types[i].type);
                $scope.selectedTypeData.push(response.data.types[i].type);

              } else {
                var same = false;
                for (var j = 0; j < $scope.yyy.length; j++){
                  if($scope.yyy[j] === response.data.types[i].type){
                    same = true;
                  }
                }
                if(same == false ){
                  $scope.yyy.push(response.data.types[i].type);
                  $scope.typeArray.push(response.data.types[i].type);
                  $scope.selectedTypeData.push(response.data.types[i].type);
                }
              }
            }
          }

          for(var i = 0; i < $scope.typeArray.length; i++){
            $scope.typeArray[i].isClicked = true;
          }

          $scope.xxx = [];

          for (var i = 0; i < response.data.genre.length; i++){
            if(response.data.genre[i].genre != ""){
              if(i == 0){
                $scope.xxx.push(response.data.genre[i].genre);
                $scope.selectedGenreData.push(response.data.genre[i].genre);
                $scope.genreArray.push(response.data.genre[i].genre);
              } else {
                var same = false;
                for (var j = 0; j < $scope.xxx.length; j++){
                  if($scope.xxx[j] === response.data.genre[i].genre){
                    same = true;
                  }
                }
                if(same == false ){
                  $scope.xxx.push(response.data.genre[i].genre);
                  $scope.selectedGenreData.push(response.data.genre[i].genre);
                  $scope.genreArray.push(response.data.genre[i].genre);
                }
              }
            }
          }



          for(var i = 0; i < $scope.genreArray.length; i++){
            $scope.genreArray[i].isClicked = true;
          }

          $scope.zzz = [];

          for (var i = 0; i < response.data.states.length; i++){
            if(response.data.states[i].state != ""){
              if(i == 0){
                $scope.zzz.push(response.data.states[i].state);
                $scope.stateArray.push(response.data.states[i].state);
                $scope.selectedStateData.push(response.data.states[i].state);
              } else {
                var same = false;
                for (var j = 0; j < $scope.zzz.length; j++){
                  if($scope.zzz[j] === response.data.states[i].state){
                    same = true;
                  }
                }
                if(same == false ){
                  $scope.zzz.push(response.data.states[i].state);
                  $scope.stateArray.push(response.data.states[i].state);
                  $scope.selectedStateData.push(response.data.states[i].state);
                }
              }
            }
          }

          for(var i = 0; i < $scope.stateArray.length; i++){
            $scope.stateArray[i].isClicked = true;
          }
        });

        $scope.updateStation = function(station){
          station.active = 0;
          station.delete = 1;
          station.user_entered = 0;
          for(var i = 0; i < $scope.deletedStations.length; i++){
            if($scope.deletedStations[i].id == station.id){
              $scope.deletedStations[i].edit = false;
            }
          }
          var slogan = station.slogan;
          var startSlogan = slogan.startsWith('"') || slogan.startsWith("'");
          var endSlogan = slogan.endsWith('"') || slogan.endsWith("'");
          if(startSlogan == true){
            slogan = slogan.substring(1);
          }
          if(endSlogan == true){
            slogan = slogan.substring(0, slogan.length - 1);
          }
          station.slogan = slogan;

          APIFactory.editStation(station).then(function (response){
              console.log(response);
          });
          $route.reload();

        }

        $scope.activateStation = function(id){
          for(var i = 0; i < $scope.deletedStations.length; i++){
            if($scope.deletedStations[i].id == id){
              var station = $scope.deletedStations[i];
              station.delete = 0;
              station.active = 1;
              station.user_entered = 0;
              APIFactory.editStation(station).then(function (response){
                  console.log(response);
              });
              $scope.deletedStations.splice(i,1);
              break;
            }
          }
          $route.reload();
        }

        $scope.pendStation = function(id){
          for(var i = 0; i < $scope.deletedStations.length; i++){
            if($scope.deletedStations[i].id == id){
              var station = $scope.deletedStations[i];
              station.delete = 0;
              station.active = 0;
              station.user_entered = 0;
              APIFactory.editStation(station).then(function (response){
                  console.log(response);
              });
              $scope.deletedStations.splice(i,1);
              break;
            }
          }
          $route.reload();
        }

        $scope.deleteForever = function(id){
          if (confirm("Do you want to delete the station for forever:") == true) {
            for(var i = 0; i < $scope.deletedStations.length; i++){
              if($scope.deletedStations[i].id == id){
                var station = $scope.deletedStations[i];
                console.log("asd");
                APIFactory.DeleteStationForever(id).then(function (response){
                    console.log(response);
                }, function (error){
                    //todo there is an error
                });
                $scope.deletedStations.splice(i,1);
                break;
              }
            }
            $route.reload();
          } else {

          }
        }
});
