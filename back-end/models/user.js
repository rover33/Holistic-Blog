const dbConnection = require('./index');

var User = dbConnection.sequelize.define('user', {
	user_id: {
		type: dbConnection.Sequelize.STRING,
		primaryKey: true,
	},
	admin: {
		type: dbConnection.Sequelize.BOOLEAN,
		allowNull: false
	}
	}, {
	    timestamps: false
	}
);

module.exports = User;