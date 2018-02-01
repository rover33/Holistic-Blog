/*const router = require('express').Router(),
request = require('request'),
path = require("path");*/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI||
                 process.env.MONGOLAB_URI||
                 process.env.MONGOHQ_URL ||
                 'mongodb://localhost/holisticBlog', function(){
                 	console.log('connected to mongodb');
                 });
require('dotenv').config()

/*
const locDb = process.env.localDb



let sequelize = new Sequelize(process.env.DATABASE_URL || locDb);*/