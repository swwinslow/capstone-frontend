app.controller('activeStationsController', function($scope, $timeout,  APIFactory, $rootScope) {

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

        $scope.selectedGenres = [];
        $scope.selectedOwnership = [];
        $scope.selectedGeo = [];

        $scope.selectedGenreData = [];

        $scope.selectedTypeData = [];

        $scope.selectedStateData = [];




        $scope.addGenre = function (genre){
          var found = false;



          for(var i = 0; i < $scope.selectedGenreData.length; i++){
            if(genre === $scope.selectedGenreData[i]){
              $scope.selectedGenreData.splice(i, 1);
              found = true;
            }
          }
          if(found == false){
            $scope.selectedGenreData.push(genre);
          }
          console.log($scope.selectedGenreData);
        };

        $scope.addGeo = function (geo){
          var found = false;
          for(var i = 0; i < $scope.selectedStateData.length; i++){
            if(geo === $scope.selectedStateData[i]){
              $scope.selectedStateData.splice(i, 1);
              found = true;
            }
          }
          if(found == false){
            $scope.selectedStateData.push(geo);
          }
        };


        $scope.addOwnership = function (ownership){
          var found = false;
          for(var i = 0; i < $scope.selectedTypeData.length; i++){
            console.log($scope.selectedTypeData[i]);
            if(ownership === $scope.selectedTypeData[i]){
              $scope.selectedTypeData.splice(i, 1);
              found = true;
            }
          }
          if(found == false){
            $scope.selectedTypeData.push(ownership);
          }
        };

        $scope.showActive = true;
        $scope.showPending = false;
        $scope.showDeleted = false;

        $scope.addStation = false;

        $scope.orderBySearch = '';
        $scope.orderByTerm = true;

        $scope.myFun = function(){
          $scope.showMe = !$scope.showMe;
        }

        $scope.showActiveFunc = function(){
          $scope.showActive = true;
          $scope.showPending = false;
          $scope.showDeleted = false;
        }

        $scope.showPendingFunc = function(){
          $scope.showActive = false;
          $scope.showPending = true;
          $scope.showDeleted = false;
        }

        $scope.showDeletedFunc = function(){
          $scope.showActive = false;
          $scope.showPending = false;
          $scope.showDeleted = true;
        }

        $scope.showAddStation = function(){
          $scope.addStation = true;
        }

        $scope.sortMethod = function(name){
          if($scope.orderBySearch == name){
            $scope.orderByTerm = !$scope.orderByTerm;
          } else {
            $scope.orderBySearch = name;
            $scope.orderByTerm = true;
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
            $scope.allActiveStations = response.data.active;
            $scope.activeStations = response.data.active;
            console.log(response.data.active);

            for(var i = 0; i < $scope.activeStations.length; i++){
                $scope.activeStations[i].edit = true;
            }
        });

          $scope.editMode = false;

        $scope.editStation = function(id){
          for(var i = 0; i < $scope.activeStations.length; i++){
            if($scope.activeStations[i].id == id){
              $scope.activeStations[i].edit = false;
              $scope.editMode = true;
            }
          }
         }

         $scope.savedGenreData;

        APIFactory.getInformation().then(function (response){

            $scope.typeArray = [];
            $scope.stateArray = [];
            $scope.genreArray = [];
            console.log(response);

            // $scope.typeArray.push(response.data.types[i].type);
            // $scope.selectedTypeData.push(response.data.types[i].type);


            $scope.yyy = [];
            for (var i = 0; i < response.data.types.length; i++){
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

            for(var i = 0; i < $scope.typeArray.length; i++){
              $scope.typeArray[i].isClicked = true;
            }

            $scope.xxx = [];

            for (var i = 0; i < response.data.genre.length; i++){
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



            for(var i = 0; i < $scope.genreArray.length; i++){
              $scope.genreArray[i].isClicked = true;
            }



            // $scope.stateArray.push(response.data.states[i].state);
            // $scope.selectedStateData.push(response.data.states[i].state);
            $scope.zzz = [];

            for (var i = 0; i < response.data.states.length; i++){
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

            for(var i = 0; i < $scope.stateArray.length; i++){
              $scope.stateArray[i].isClicked = true;
            }

        });


        $scope.updateStation = function(station){
          station.active = 1;
          station.delete = 0;
          for(var i = 0; i < $scope.activeStations.length; i++){
            if($scope.activeStations[i].id == station.id){
              $scope.activeStations[i].edit = true;
            }
          }
          APIFactory.editStation(station).then(function (response){
              console.log(response);
          });

        }

        $scope.deleteStation = function(id) {
          for(var i = 0; i < $scope.activeStations.length; i++){
            if($scope.activeStations[i].id == id){
              var station = $scope.activeStations[i];
              station.delete = 1;
              station.active = 0;
              APIFactory.editStation(station).then(function (response){
                  console.log(response);
              });
            }
          }
        };

        $scope.createActiveStation = function(station){
          station.delete = 0;
          station.active = 1;
          APIFactory.createStation(station).then(function (response){
              console.log(response);
          });
        }

        $scope.createPendingStation = function(station){
          console.log('lol');
          station.delete = 0;
          station.active = 0;
          APIFactory.createStation(station).then(function (response){
              console.log(response);
          });
        }
});
