const Sequelize = require('sequelize');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI||
                 process.env.MONGOLAB_URI||
                 process.env.MONGOHQ_URL ||
                 'mongodb://localhost/holisticBlog', () => console.log('connected to mongodb'));

let sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://miladabujarada@localhost:5432/holistic');
console.log('connected to postgres');

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

const Product = require('./product');
const Blog = require('./blog');

module.exports.models = {
Blog : Blog,
Product: Product
};