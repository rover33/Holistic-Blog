const dbConnection = require('./index');

var Order = dbConnection.sequelize.define('order',{
	order_num: {
		type: dbConnection.Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	total: {
		type: dbConnection.Sequelize.REAL,
		allowNull: false
	},
	order_date: {
		type: dbConnection.Sequelize.STRING,
		allowNull: false
	}
	},{
		timestamps: false
	}
);

module.exports = Order;