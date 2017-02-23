var user = require('./../controllers/user.js')
var nerd = require('./../controllers/nerd.js')

module.exports = function (app) {
    app.post('/register', user.register);
    app.get('/check', user.check);
    app.get('/logout', user.logout);
    app.post('/addnerd', nerd.addNerd);
    app.get('/getall', nerd.getNerds);
    app.get('/like/:id', nerd.likeNerds);
    app.get('/update/:id', nerd.updateStatus);
}