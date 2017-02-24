app.factory('itemFactory', function ($http, $location) {
    var factory = {};

    factory.addItem = function (item, callback) {
        console.log(item)
        $http.post('/additem', item).then(function (output) {
            if (!output.data.status) {
                alert("Something went wrong! Please try again")
            } else {
                callback(output.data);
            }
        })
    };

    factory.getItems = function (callback) {
        $http.get('/getall').then(function (output) {
            // console.log(output.data)
            // for (var i=0; i<output.data.items.length; i++) {
            // console.log(output.data.items[i].likes + " is the number of likes")
            // }
            callback(output.data);
        })
    };

    factory.updateStatus = function (id, callback) {
        // console.log(id)
        $http.get('/update/' + id).then(function (output) {
            // console.log(output.data)
            // for (var i=0; i<output.data.items.length; i++) {
            // console.log(output.data.items[i].likes + " is the number of likes")
            // }
            callback(output.data);
        });
    }
    return factory;
});