let dbConnection = require('../models/index');

let products = [
	
	{
		name: 'N-acetyl-L-cysteine',
		description: 'A highly bioavailable nutrient that supports bronchial and respiratory health. N-acetyl-L-cysteine supports healthy glutathione levels at the cellular level. Glutathione is a potent antioxidant which helps protect neurons from oxidative stress. ',
		price: 15.29,
		image_url: 'https://i.imgur.com/pgvT79K.jpg',
		quantity: 1200
	},
	{
		name:'Chinese Licorice Liquid Extract',
		description: 'Chinese Licorice (Glycyrrhiza Uralensis) Root Tincture - Licorice is a common herb which has been used in traditional Chinese medicine for centuries. More than 20 triterpenoids and nearly 300 flavonoids have been isolated from licorice.',
		price:31.50,
		image_url:'https://i.imgur.com/cp6HuKv.jpg' ,
		quantity: 1500
	},
	{
		name: 'DHEA',
		description: 'DHEA is the body’s most abundant circulating hormone, but as we age DHEA levels begin to decline. Supplementing for healthy DHEA levels can help support immune function, circulatory health, mood and well-being, healthy body weight and lean muscle mass.',
		price: 18.29,
		image_url: 'https://i.imgur.com/adQEt39.jpg',
		quantity: 1300
	},
	{
		name:'Two-Per-Day',
		description: 'Two Per Day multivitamins have the highest nutritional potencies of any science-based multivitamin formula that can fit inside two capsules or tablets. This gives you far more of the essential vitamins, minerals and health-promoting nutrients.',
		price:15.75,
		image_url: 'https://i.imgur.com/O9Z03VE.jpg',
		quantity: 1500
	},
	{
		name: 'R lipoic Acid',
		description: 'Potent antioxidant that achieves healthy plasma levels already within normal range, Helps protect against oxidative stress, supports healthy mitochondrial function, preserves youthful cellular energy, Potent Antioxidant that Achieves Peak Plasma Levels' ,
		price: 16.99,
		image_url: 'https://i.imgur.com/IxA8jIH.jpg',
		quantity: 1000
	},
	{
		name: 'Glutathione',
		description: 'A peptide molecule synthesized in the body from the three amino acids L-glutamic acid, L-cysteine and glycine. Glutathione is one of the body’s most important and powerful antioxidants,8 helping to detoxify xenobiotics.',
		price: 20.99,
		image_url: 'https://i.imgur.com/HChsXx3.jpg',
		quantity: 1100
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
