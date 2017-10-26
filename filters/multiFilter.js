app.filter('genre', function() {
  return function(items, filterWords) {
    var filtered = [];
    angular.forEach(items, function(items) {
      for(var i = 0; i < filterWords.length; i++){
        if(items.genre && items.genre.indexOf(filterWords[i])>-1) {
          filtered.push(items);
          break;
        }
      }
    });
    return filtered;
  }
});


app.filter('type', function() {
  return function(items, filterWords) {
    var filtered = [];
    angular.forEach(items, function(items) {
      for(var i = 0; i < filterWords.length; i++){
        if(items.type && items.type.indexOf(filterWords[i])>-1) {
          filtered.push(items);
          break;
        }
      }
    });
    return filtered;
  }
});

app.filter('state', function() {
  return function(items, filterWords) {
    var filtered = [];
    angular.forEach(items, function(items) {
      for(var i = 0; i < filterWords.length; i++){
        if(items.state && items.state.indexOf(filterWords[i])>-1) {
          filtered.push(items);
          break;
        }
      }
    });
    return filtered;
  }
});