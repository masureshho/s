var app = angular.module('school-hub', ['ngRoute', 'ngCookies']);


app.controller('navController', function ($scope, $location, $http, $cookieStore) {
  $scope.navContent = [{
    name: "Home ",
    route: "/asd"
  }, {
    name: "Help ",
    route: "/help"
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
  $scope.logout = function () {
    $http.delete('/login').success(function (result) {
      $cookieStore.remove('login');
      window.location.href = result;
    });
  }
});

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/asd', {
      templateUrl: '/views/partials/main.html'
    })
});