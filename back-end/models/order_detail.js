const dbConnection = require('./index');

var Order_detail = dbConnection.sequelize.define('order_detail',{
	id: {
		type: dbConnection.Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	quantity: {
		type: dbConnection.Sequelize.INTEGER,
		allowNull: false
	}
	}, {
		timestamps: false
	}
);

module.exports = Order_detail;