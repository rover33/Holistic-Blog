const Sequelize = require('sequelize');
let sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://Remy@localhost:5432/holistic_blog');

var Product = sequelize.define('product', {
	product_id: {
		type: Sequelize.INTEGER, primaryKey: true 
	},
	name: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.REAL
	},
	image_url: {
		type: Sequelize.STRING
	}
	} , {
	    timestamps: false
});

module.exports = Product;