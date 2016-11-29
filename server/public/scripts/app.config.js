petApp.config(function ($routeProvider) {
  $routeProvider
    .when('/barnyard', {
      templateUrl: 'views/templates/pet.html',
      controller: 'PetController'
    })
    .when('/horse', {
      templateUrl: 'views/templates/pet.html',
      controller: 'PetController'
    })
    .when('/cat', {
      templateUrl: 'views/templates/pet.html',
      controller: 'PetController'
    })
    .otherwise({
      redirectTo: '/barnyard'
    });
});
