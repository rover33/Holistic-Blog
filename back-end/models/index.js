const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const os = require("os");

mongoose.connect(process.env.MONGODB_URI||
                 process.env.MONGOLAB_URI||
                 process.env.MONGOHQ_URL ||
                 'mongodb://localhost/holisticBlog', () => console.log('connected to mongodb'));

let user = os.userInfo().username, sequelize;;
if(user === 'miladabujarada') {
	sequelize = new Sequelize('postgres://miladabujarada@localhost:5432/holistic');
} else if (user === 'jintak') {
	sequelize = new Sequelize('postgres://jintak@localhost:5432/holistic');
} else if (user === 'stevanolie') {
	sequelize = new Sequelize('postgres://stevanolie@localhost:5432/holistic');
 } else if (user === 'Remy') {
   sequelize = new Sequelize('postgres://Remy@localhost:5432/holistic');
 } else {
	sequelize = new Sequelize(process.env.DATABASE_URL);
};

//console.log(sequelize);

console.log('connected to postgres');

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

const Product = require('./product');
const Blog = require('./blog');
const User = require('./user');
const Order = require('./order');
const Order_detail = require('./order_detail');

User.hasMany(Order, {foreignKey: 'user_id'});
Product.hasMany(Order_detail, {foreignKey: 'product_id'});
Order.hasMany(Order_detail, {foreignKey: 'order_num'});

module.exports.models = {
Blog : Blog,
Product: Product,
User: User,
Order: Order,
Order_detail: Order_detail
};