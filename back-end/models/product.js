const dbConnection = require('./index');

var Product = dbConnection.sequelize.define('product', {
	product_id: {      
		type: dbConnection.Sequelize.INTEGER,
		autoIncrement: true, 
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
	},
	quantity: {
		type: dbConnection.Sequelize.INTEGER
	}
	} , {
	    timestamps: false
});

module.exports = Product;