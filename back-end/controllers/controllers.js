const index = require('../models/index');

let Blog = index.models.Blog;
let Product = index.models.Product;
let User = index.models.User;

let getBlogs = (response) => {
	// blog = new Blog();
	// blog.blogTitle = `random ${Math.random()}`;
	// blog.blogBody = `lorem Epsom ${Math.random()}`;
	// blog.date = Date();
	// blog.save();

	Blog.find({}, null, {sort:{date: -1}}, (err, results) => {
		response.json(results)});
};

let getBlog = (request, response) => {
	Blog.findOne({_id: request.params.id}).then((result) => response.json(result));
};

let getProducts = (response) => {  

	Product.findAll().then(results => response.json(results));
};

let getProduct = (request, response) => {
	Product.findOne({where: {product_id: request.params.id}}).then((result) => response.json(result));
};

let addProduct = (request, response) => {
	Product.create({
		name: request.body.name,
		description: request.body.description,
		price: request.body.price,
		image_url: request.body.image_url,
		quantity: request.body.quantity
	}, {plain: true}).then((newProduct) => response.json(newProduct));	
};

let putProduct = (request, response) => {
	Product.update({
		name: request.body.name,
		description: request.body.description,
		price: request.body.price,
		image_url: request.body.image_url,
		quantity: request.body.quantity
	},{
		where: {product_id: request.params.id},
		returning: true,
		plain: true
	}).then((updatedProduct) => response.json(updatedProduct));
};

let deleteProduct = (request, response) => {
	Product.destroy({where: {product_id: request.params.id}})
	.then((numberOfDeletedProducts) => response.json(numberOfDeletedProducts));
};

let checkQuantity = (request, response) => {
	index.sequelize.query(`SELECT * FROM products WHERE product_id ='${request.query.id}'`)
		.then((result) => {
			console.log(result[0][0]);
			if (result[0][0]) {
				response.json({quantity: result[0][0].quantity});
			} else {
				response.json({quantity: 0});
			};
		});
};

let placeOrder = (request, response) => {
	
}

let checkAdmin = (request, response) => {
	index.sequelize.query(`SELECT admin from users where user_id = '${request.params.id}'`)
		.then((result) => {
			if (result[0][0]) {
				response.json(result[0][0]);
			} else {
				response.json({admin:false});
			};	
		});
};

module.exports.getBlogs = getBlogs;
module.exports.getBlog = getBlog;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.addProduct = addProduct;
module.exports.putProduct = putProduct;
module.exports.deleteProduct = deleteProduct;
module.exports. checkQuantity = checkQuantity;
module.exports.placeOrder = placeOrder;
module.exports.checkAdmin = checkAdmin;
