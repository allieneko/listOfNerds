var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {type: String, minlength: 3, required: true, unique: true},
	_items: [{type: Schema.Types.ObjectId, ref: 'Item'}]
})

mongoose.model('User', UserSchema);