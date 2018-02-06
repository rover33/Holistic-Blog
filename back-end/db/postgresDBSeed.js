let dbConnection = require('../models/index');
//console.log(dbConnection);
let products = [
	{
		name: 'product1',
		description: 'product 1 is a great product buy it bitch or I\'ll fuck you up' ,
		price: 18.29,
		image_url: 'www.image.com',
		quantity: 10
	},
	{
		name: 'product2',
		description: 'product2 is effective for things that has to do with things inside of other things',
		price: 8.29,
		image_url: 'www.image.com',
		quantity: 11
	},
	{
		name: 'product3',
		description: 'product3 is effective for things that has to do with things inside of other things',
		price: 5.29,
		image_url: 'www.image.com',
		quantity: 12
	},
	{
		name: 'product4',
		description: 'Understanding thinking. View healthcare. Treating lifestyle framework integration therapy',
		price: 80.29,
		image_url: 'www.image.com',
		quantity: 13
	}
];

let users = [
	{
		user_email: 'milad.abujarada@gmail.com',
		user_id: 123,
		admin: true
	},
	{
		user_email: 'jin.tak@ga.com',
		user_id: 1234,
		admin: true
	},
	{
		user_email: 'remy@ga.com',
		user_id: 12345,
		admin: true
	},
	{
		user_email: 'stevano@ga.com',
		user_id: 123456,
		admin: true
	},
	{
		user_email: 'micha@ga.com',
		user_id: 321,
		admin: false
	},
	{
		user_email: 'jacy@ga.com',
		user_id: 09000,
		admin: false
	}
];

let orders = [
	{
		order_num: 1,
		total: 20,
		user_id: 321,
		order_date: Date()
	},
	{
		order_num: 2,
		total: 25,
		user_id: 09000,
		order_date: Date()
	},
	{
		order_num: 3,
		total: 100,
		user_id: 321,
		order_date: Date()
	},
	{
		order_num: 4,
		total: 120,
		user_id: 321,
		order_date: Date()
	}
];

let order_details = [
	{
		quantity: 2,
		orderOrderNum: 1,
		productProductId: 1
	},
	{
		quantity: 1,
		orderOrderNum: 1,
		productProductId: 3
	},
	{
		quantity: 2,
		orderOrderNum: 2,
		productProductId: 4
	},
	{
		quantity: 10,
		orderOrderNum: 2,
		productProductId: 1
	},
	{
		quantity: 2,
		orderOrderNum: 2,
		productProductId: 4
	},
	{
		quantity: 2,
		orderOrderNum: 3,
		productProductId: 3
	},
	{
		quantity: 1,
		orderOrderNum: 3,
		productProductId: 4
	},
	{
		quantity: 1,
		orderOrderNum: 4,
		productProductId: 1
	},
	{
		quantity: 5,
		orderOrderNum: 4,
		productProductId: 4
	}
];

dbConnection.models.Product.bulkCreate(products);
dbConnection.models.User.bulkCreate(users);
dbConnection.models.Order.bulkCreate(orders);
dbConnection.models.Order_detail.bulkCreate(order_details).then(() => process.exit(0));
