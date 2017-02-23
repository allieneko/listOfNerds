var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NerdSchema = new Schema({
	name: {type: String, minlength: 3, required: true},
    status: {type: String, default: 'Active', required: true},
    powers: {type: String, required: true},
    likes: {type: Number, default: 0},
	// _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
})

mongoose.model('Nerd', NerdSchema);