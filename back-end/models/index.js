const router = require('express').Router(),
request = require('request'),
path = require("path");
require('dotenv').config()


const locDb = process.env.localDb



let sequelize = new Sequelize(process.env.DATABASE_URL || locDb);