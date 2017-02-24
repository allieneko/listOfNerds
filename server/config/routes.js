var user = require('./../controllers/user.js')
var item = require('./../controllers/item.js')

module.exports = function (app) {
    app.post('/register', user.register);
    app.get('/check', user.check);
    app.get('/getallusers', user.getUsers);
    app.get('/user/:name', user.getOneUser);
    app.get('/logout', user.logout);
    app.post('/additem', item.addItem);
    app.get('/getall', item.getItems);
    app.get('/like/:id', item.likeItems);
    app.get('/update/:id', item.updateStatus);
}