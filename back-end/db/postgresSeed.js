let dbConnection = require('../models/index');

let products = [
	{
		name: 'Lemongrass Extract',
		description: 'The essential oil of lemongrass is used as aromatherapy for muscle pain' ,
		price: 6.99,
		image_url: 'https://images-na.ssl-images-amazon.com/images/I/710bw7i0W7L._SY355_.jpg',
		quantity: 10
	},
	{
		name: 'Organic Rainbow Hair Dye',
		description: 'Organic rainbow hair dye made from unicorn droppings. Good for hair, skin, and can also be used as toothpaste.',
		price: 599.99,
		image_url: 'http://www.mens-hairstyle.com/wp-content/uploads/2014/12/Just-for-Men-Hair-Color.jpg',
		quantity: 11
	},
	{
		name: 'Vitamin C',
		description: 'Vitamin C, also known as ascorbic acid and L-ascorbic acid, is a vitamin found in food and used as a dietary supplement. The disease scurvy is prevented and treated with vitamin C-containing foods or dietary supplements',
		price: 5.29,
		image_url: 'http://www.epharmacy.com.au/images/productimages/65054/original.jpg?28%2F08%2F2017+10%3A29%3A48+AM',
		quantity: 12
	},
	{
		name: 'Aloe Vera Extract',
		description: 'Because of its anti-inflammatory and laxative components, another aloe vera benefit is its ability to help with digestion',
		price: 8.29,
		image_url: 'https://www.terrylabs.com/images/layout/aloe-vera-concentrate.jpg',
		quantity: 13
	}
];

let users = [
	{
		user_id: 'L5sLemQAqHP6qOsbwerfdrFgJAe2',
		admin: true
	},
	{

		user_id: 'aNzwFUA2pLVyCsqC39Vya74xxXG3',

		admin: true
	}
];

/*let orders = [
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
		user_id: 123,
		order_date: Date()
	}
];*/

/*let order_details = [
	{
		quantity: 2,
		order_num: 1,
		product_id: 1
	},
	{
		quantity: 1,
		order_num: 1,
		product_id: 3
	},
	{
		quantity: 2,
		order_num: 2,
		product_id: 4
	},
	{
		quantity: 10,
		order_num: 2,
		product_id: 1
	},
	{
		quantity: 2,
		order_num: 2,
		product_id: 4
	},
	{
		quantity: 2,
		order_num: 3,
		product_id: 3
	},
	{
		quantity: 1,
		order_num: 3,
		product_id: 4
	},
	{
		quantity: 1,
		order_num: 4,
		product_id: 1
	},
	{
		quantity: 5,
		order_num: 4,
		product_id: 4
	}
];*/

dbConnection.models.Product.bulkCreate(products)
	.then(() => dbConnection.models.User.bulkCreate(users))
	.then(() => process.exit(0));
	/*.then(() => dbConnection.models.Order.bulkCreate(orders))*/
	/*.then(() => dbConnection.models.Order_detail.bulkCreate(order_details))*/
