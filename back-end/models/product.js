const dbConnection = require('./index');

var Product = dbConnection.sequelize.define('product', {
	product_id: {      
		type: dbConnection.Sequelize.INTEGER,
		autoIncrement: true, 
		primaryKey: true 
	},
	name: {
		type: dbConnection.Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: dbConnection.Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: dbConnection.Sequelize.REAL,
		allowNull: false
	},
	image_url: {
		type: dbConnection.Sequelize.STRING,
		allowNull: false
	},
	quantity: {
		type: dbConnection.Sequelize.INTEGER,
		allowNull: false
	}
	}, {
	    timestamps: false
	}
);

module.exports = Product;