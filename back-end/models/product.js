const Sequelize = require('sequelize');
let sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://miladabujarada@localhost:5432/holistic');

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