var m = angular.module("routeapp", ['ngRoute']);

m.config(function ($routeProvider) {
    $routeProvider.when("/home.html", { templateUrl: "home.html" });
})