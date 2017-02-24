app.controller('itemController', function ($scope, $location, $routeParams, timeAgo, nowTime, userFactory, itemFactory) {
    $scope.errors = [];
    $scope.items = [];
    $scope.checked = false;
    $scope.checked2 = true;

    itemFactory.getItems(function (data) {
        $scope.items = data.items;
        // console.log(data.items)
    })

    $scope.addItem = function () {
        $scope.errors = [];

        if (!$scope.newItem || !$scope.newItem.title || !$scope.newItem.description) {
            $scope.errors.push('All fields are required')
        }
        if ($scope.newItem.title.length < 5) {
            $scope.errors.push('Please give a longer title (at least 5 characters)')
        }
        if ($scope.newItem.description.length < 10) {
            $scope.errors.push('Please give a longer description (at least 10 characters)')
        } else {
            itemFactory.addItem($scope.newItem, function (data) {
                // console.log($scope.newItem)
                itemFactory.getItems(function (data) {
                    // console.log(data.items)
                    $scope.items = data.items;
                })

                })
        }
    },

        $scope.updateStatus = function(id, data) {
            // console.log(id)
            itemFactory.updateStatus(id, function(data) {
            itemFactory.getItems(function (data) {
                $scope.items = data.items;
;
            })
                $scope.checked = false
                // $location.url('/dashboard')
            })
        };

    // $scope.likeItem = function() {
    //     console.log("liking a item")
    //     $location.url('/dashboard')
    // }
});