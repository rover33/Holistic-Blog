let dbConnection = require('../models/index');
//console.log(dbConnection);
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
		price: 80.29,
		image_url: 'https://www.terrylabs.com/images/layout/aloe-vera-concentrate.jpg',
		quantity: 13
	}
];
dbConnection.models.Product.bulkCreate(products).then(() => process.exit(0));
