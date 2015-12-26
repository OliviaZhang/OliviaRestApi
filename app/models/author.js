var mongoose     = require('mongoose');
var Schema = mongoose.Schema;
var authorSchema = new Schema({
	author: String,
	text: String
}, {collection: 'author-example'});

module.exports = mongoose.model('Author', authorSchema);
