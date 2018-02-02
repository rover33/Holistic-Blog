const dbConnection = require('./index');

var Product = dbConnection.sequelize.define('product', {
	product_id: {
		type: dbConnection.Sequelize.INTEGER, 
		primaryKey: true 
	},
	name: {
		type: dbConnection.Sequelize.STRING
	},
	description: {
		type: dbConnection.Sequelize.STRING
	},
	price: {
		type: dbConnection.Sequelize.REAL
	},
	image_url: {
		type: dbConnection.Sequelize.STRING
	}
	} , {
	    timestamps: false
});

module.exports = Product;