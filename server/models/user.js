var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {type: String, minlength: 3, required: true, unique: true},
	// _nerds: [{type: Schema.Types.ObjectId, ref: 'Nerd'}]
})

mongoose.model('User', UserSchema);