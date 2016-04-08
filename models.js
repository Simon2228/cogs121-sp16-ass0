var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	email: String,
	content: String,
	created: Date
});

module.exports.Message = mongoose.model('Message', messageSchema);