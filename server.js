var express = require('express'),
    app = express(),
    bp = require('body-parser'),
    path = require('path'),
    session = require('express-session'),
    port = 8000;

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(bp.json());
app.use(session({
    secret: 'thisisasecretwordomg',
    resave: false,
    saveUninitialized: true
}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log("Listening on port " + port);
})