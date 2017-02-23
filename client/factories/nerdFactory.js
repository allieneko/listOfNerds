app.factory('nerdFactory', function ($http, $location) {
    var factory = {};

    factory.addNerd = function (nerd, callback) {
        //console.log(nerd)
        $http.post('/addnerd', nerd).then(function (output) {
            if (!output.data.status) {
                alert("Something went wrong! Please try again")
            } else {
                callback(output.data);
            }
        })
    };

    factory.getNerds = function (callback) {
        $http.get('/getall').then(function (output) {
            // console.log(output.data)
            for (var i=0; i<output.data.nerds.length; i++) {
            // console.log(output.data.nerds[i].likes + " is the number of likes")
            }
            callback(output.data);
        })
    }
    return factory;
})