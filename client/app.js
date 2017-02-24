var app = angular.module('app', ['ngRoute', 'yaru22.angular-timeago']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'userController'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'userController'
    })
    .when('/user/:name', {
        templateUrl: 'partials/user.html',
        controller: 'userController'
    })

    .otherwise({
        redirectTo: '/'
    })
})