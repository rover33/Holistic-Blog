let dbConnection = require('../models/index');
//console.log(dbConnection);
let products = [
	{
		product_id: 1,
		name: 'product1',
		description: 'product 1 is a great product buy it bitch or I\'ll fuck you up' ,
		price: 18.29,
		image_url: 'www.image.com'
	},
	{
		product_id: 2,
		name: 'product2',
		description: 'product2 is effective for things that has to do with things inside of other things',
		price: 8.29,
		image_url: 'www.image.com'
	},
	{
		product_id: 3,
		name: 'product3',
		description: 'product3 is effective for things that has to do with things inside of other things',
		price: 5.29,
		image_url: 'www.image.com'
	},
	{
		product_id: 4,
		name: 'product4',
		description: 'Understanding thinking. View healthcare. Treating lifestyle framework integration therapy',
		price: 80.29,
		image_url: 'www.image.com'
	}
];
dbConnection.models.Product.bulkCreate(products);
