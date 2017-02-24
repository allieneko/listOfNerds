app.controller('userController', function ($scope, $location, $routeParams, timeAgo, nowTime, userFactory, itemFactory) {

    userFactory.getUsers(function(data) {
        $scope.users = data.users;
    })

    userFactory.check(function(data) {
        // console.log("Checking user")
        // console.log(data.status)
        if(data.status == false) {
            $location.url('/')
        } else {
        $scope.currentuser = data.user; 
        if($location.url() == '/') {
            $location.url('/dashboard')
        }
    }}),

    $scope.register = function () {
        $scope.errors = [];

        if (!$scope.user || !$scope.user.name) {
            $scope.errors.push('Please enter a name')
        }
        else if ($scope.user.name.length < 3) {
            $scope.errors.push('Name should be longer than two characters')
        } else {
            userFactory.register($scope.user)
        }

    }

if ($routeParams.name) {
        userFactory.getOneUser($routeParams.name, function (data) {
            // console.log($routeParams.name)
            // console.log("route?")
            $scope.user = data;
            // console.log(data)
        })}
}
);