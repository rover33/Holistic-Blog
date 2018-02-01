require('../models/index');
const Blog = require('../models/blog');

function getRoot(response){
	//res.sendFile(path.join(__dirname + '/dist/index.html'));
/*	blog = new Blog();
	blog.blogTitle = `random ${Math.random()}`;
	blog.blogBody = `lorem ${Math.random()}`;
	blog.date = Date();
	blog.save();*/
	Blog.find({}, null, {sort:{date: -1}}, function(err, results){
		response.json(results)});
};

module.exports.getRoot = getRoot;