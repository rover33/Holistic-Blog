const models = require('../models/index').models;

let Blog = models.Blog;
let Product = models.Product;

let getBlogs = (response) => {
/*	blog = new Blog();
	blog.blogTitle = `random ${Math.random()}`;
	blog.blogBody = `lorem Epsom ${Math.random()}`;
	blog.date = Date();
	blog.save();*/
	Blog.find({}, null, {sort:{date: -1}}, (err, results) => {
		response.json(results)});
};

let getBlog = (request, response) => {
	Blog.findOne({_id: request.params.id}).then((result) => response.json(result));
};

let getProducts = (response) => {
/*	Product.create({
		product_id: Math.ceil((Math.random() * 10000)),
		name: 'product',
		description: 'description of a product of products',
		price: 18.29,
		image_url: 'www.image.com'
	});*/
	Product.findAll().then(results => response.json(results));
};

let getProduct = (request, response) => {
	Product.findOne({where: {product_id: request.params.id}}).then((result) => response.json(result));
}
module.exports.getBlogs = getBlogs;
module.exports.getBlog = getBlog;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;