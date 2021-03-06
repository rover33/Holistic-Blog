const mongoose = require('mongoose');

let BlogSchema = mongoose.Schema;
let blog = new BlogSchema({
	blogTitle: {type: String, required: true},
	blogBody: {type: String, required: true},
	date: {type: String, required: true},
	author: {type: String, required: true}
});
let Blog = mongoose.model('Blog', blog);

module.exports = Blog;