var app = angular.module('school-hub', ['ngRoute']);


app.controller('navController', function ($scope, $location) {
  console.log($location);
  $scope.navContent = [{
    name: "Home ",
    route: "/asd"
  }, {
    name: "Something ",
    route: "/Something"
  }, {
    name: "Something ",
    route: "/Something"
  }, {
    name: "Something ",
    route: "/Something"
  }, {
    name: "Something ",
    route: "/Something"
  }];
  $scope.redirect = function (route) {
    $location.path(route);
  }
});

app.config(function ($routeProvider) {
  $routeProvider
    .when('/asd', {
      templateUrl: '/asd.html'
    })
});