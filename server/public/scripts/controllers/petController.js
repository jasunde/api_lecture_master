petApp.controller("PetController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  var key = 'b900e0d5e332753a460a64eaa8de00fd';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = getRandomPet;
  $scope.animalType = getAnimalType();
  getRandomPet();

  function getAnimalType() {
    return $location.path().substring(1);
  }

  function getRandomPet() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=' + $scope.animalType;
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.pet = response.data.petfinder.pet;
    });
  };
}]);
