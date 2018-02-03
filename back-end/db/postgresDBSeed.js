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
dbConnection.models.Product.bulkCreate(products).then(() => process.exit(0));
