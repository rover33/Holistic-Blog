/*const router = require('express').Router(),
request = require('request'),
path = require("path");*/
const Sequelize = require('sequelize');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI||
                 process.env.MONGOLAB_URI||
                 process.env.MONGOHQ_URL ||
                 'mongodb://localhost/holisticBlog', function(){
                 	console.log('connected to mongodb');
                 });
let sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://miladabujarada@localhost:5432/holistic');
/*sequelize.query('select * from products;').then(products => console.log(products[0][0].product_id));*/
require('dotenv').config()

/*const locDb = process.env.localDb*/



