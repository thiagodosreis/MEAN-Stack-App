/**
 * Created by thiagodosreis on 9/4/16.
 */


var app = angular.module("app", ['controllersModule', 'ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/viewCarriers', {
    templateUrl: 'view/carriers.html',
    controller: 'carriersController'
    })
    .when('/viewRoutes/:flightId', {
        templateUrl: 'view/routes.html',
        controller: 'routesController'
    })
    .when('/viewFiles/:flightId/:fileName', {
        templateUrl: 'view/file.html',
        controller: 'filesController'
    })
    .otherwise({
        redirectTo: '/viewCarriers'
    });
});
