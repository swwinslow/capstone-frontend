app.filter('genre', function() {
    return function(items, filterWords, editMode, scope) {
      if(!editMode){
        var filtered = [];
        angular.forEach(items, function(items) {
          for(var i = 0; i < filterWords.length; i++){
            if(items.genre && items.genre.indexOf(filterWords[i])>-1) {
              filtered.push(items);
              break;
            }
          }
        });
        // dataX = filtered;
        scope.savedGenreData = filtered;
        return filtered;
    } else {
      return scope.savedGenreData;
    }

  }
});


app.filter('type', function() {
  return function(items, filterWords, editMode, scope) {
    if(!editMode){
      var filtered = [];
      angular.forEach(items, function(items) {
        for(var i = 0; i < filterWords.length; i++){
          if(items.type && items.type.indexOf(filterWords[i])>-1) {
            filtered.push(items);
            break;
          }
        }
      });
      scope.savedTypeData = filtered;
      return filtered;
    } else {
      return scope.savedTypeData;

    }
  }
});

app.filter('state', function() {
  return function(items, filterWords, editMode, scope) {
    if(!editMode){
      var filtered = [];
      angular.forEach(items, function(items) {
        for(var i = 0; i < filterWords.length; i++){
          if(items.state && items.state.indexOf(filterWords[i])>-1) {
            filtered.push(items);
            break;
          }
        }
      });
      scope.savedStateData = filtered;
      return filtered;
    } else {
      return scope.savedStateData;
    }
  }
});
