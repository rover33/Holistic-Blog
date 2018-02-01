require('../models/index');
const Blog = require('../models/blog');
const Product = require('../models/product');
let getBlogs = (response) => {
	//res.sendFile(path.join(__dirname + '/dist/index.html'));
	// blog = new Blog();
	// blog.blogTitle = `random ${Math.random()}`;
	// blog.blogBody = `lorem ${Math.random()}`;
	// blog.date = Date();
	// blog.save();
	
	Blog.find({}, null, {sort:{date: -1}}, (err, results) => {
		response.json(results)});
};

let getProducts = (response) => {
/*	Product.create({
		product_id: Math.ceil((Math.random() * 10000)),
		name: 'product',
		description: 'description of a product of products',
		price: 25.99,
		image_url: 'www.image.com'
	});*/
	Product.findAll().then(results => {
		response.json(results);
	});
};

module.exports.getBlogs = getBlogs;
module.exports.getProducts = getProducts;