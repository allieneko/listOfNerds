var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
	title: {type: String, minlength: 5, required: true},
    description: {type: String, minlength: 10, required: true},
    status: {type: String, default: 'Active', required: true},
    createdby: {type: String, required: true},
	_user: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
}, {timestamps: true})

mongoose.model('Item', ItemSchema);