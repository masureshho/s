var app = angular.module('school-hub', ['ngRoute']);


app.controller('navController', function ($scope, $location) {
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

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/asd', {
      templateUrl: '/views/partials/main.html'
    })
});