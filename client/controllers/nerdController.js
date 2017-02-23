app.controller('nerdController', function ($scope, $location, $routeParams, timeAgo, nowTime, userFactory, nerdFactory) {
    
    nerdFactory.getNerds(function(data) {
        $scope.nerds = data.nerds;
    })

    $scope.addNerd = function () {
        $scope.errors = [];

        if (!$scope.newNerd || !$scope.newNerd.name || !$scope.newNerd.powers) {
            $scope.errors.push('All fields are required')
        } else {
            nerdFactory.addNerd($scope.newNerd, function (data) {
                nerdFactory.getNerds(function (data) {
                    $scope.nerds = data;
                })
                $location.url('/dashboard');
            })
        }
    }

    // $scope.likeNerd = function() {
    //     console.log("liking a nerd")
    //     $location.url('/dashboard')
    // }
});