var mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    models_path = path.join(__dirname +'./../models');
    
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/heroes');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		require(models_path +'/' + file);
	}
})