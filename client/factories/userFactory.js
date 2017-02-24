app.factory('userFactory', function($http, $location) {
    var factory = {};

    factory.register = function(user) {
        // console.log("Inside factory register")
        $http.post('/register', user).then(function(output) {
            if(output.data){
                $location.url('/dashboard');
            }
        })
    },

    factory.check = function(cb) {
        $http.get('/check').then(function(output){
            // console.log(output)
            if(!output.data) {
                $location.url('/')
            } else {
                cb(output.data);
            }
        })
    }
    
    factory.getUsers = function (callback) {
        $http.get('/getallusers').then(function (output) {
            callback(output.data);
        })
    
    factory.getOneUser = function (name, callback) {
        $http.get('/user/' + name).then(function (output) {
            // console.log(output.data)
            // console.log("factory")
            // for (var i = 0; i < output.data.quotes.length; i++) {
            //     output.data.quotes[i].likecount = output.data.quotes[i].liked_by.length;
            //     if (output.data.quotes[i].liked_by.indexOf(output.data.user._id) > -1) {
            //         output.data.quotes[i].userlike = 'Unlike';
            //     } else {
            //         output.data.quotes[i].userlike = 'Like';
                
                callback(output.data);
            })
        }
    }
    return factory;
})