const index = require('../models/index');

let Blog = index.models.Blog;
let blog = new Blog();
blog.collection.remove({});
let blogs = [
	{
		blogTitle:"Health in a snack",
		blogBody:"Fusce quis enim vitae velit maximus volutpat. Nam eget tincidunt mauris. Cras varius elementum justo nec scelerisque. Curabitur hendrerit ex nec augue pulvinar, in ultricies augue condimentum.",
		date: Date()
	},
	{
		blogTitle: "Green Tea benifits",
		blogBody:"Fusce quis enim vitae velit maximus volutpat. Nam eget tincidunt mauris. Cras varius elementum justo nec scelerisque. Curabitur hendrerit ex nec augue pulvinar, in ultricies augue condimentum."
	},
	{
		blogTitle:"Vitamin C",
		blogBody:"Fusce quis enim vitae velit maximus volutpat. Nam eget tincidunt mauris. Cras varius elementum justo nec scelerisque. Curabitur hendrerit ex nec augue pulvinar, in ultricies augue condimentum.",
		date: Date()
	},
	{
		blogTitle:"Natural immunity",
		blogBody:"Fusce quis enim vitae velit maximus volutpat. Nam eget tincidunt mauris. Cras varius elementum justo nec scelerisque. Curabitur hendrerit ex nec augue pulvinar, in ultricies augue condimentum.",
		date: Date()
	},
	{
		blogTitle:"B12 powers",
		blogBody:"Nunc tincidunt molestie vehicula. Aliquam et eleifend est, vitae sagittis neque. Etiam ut justo fringilla, dignissim tellus et, suscipit tortor. Maecenas in ligula magna. Ut vitae ipsum nulla.",
		date: Date()
	},
];
Blog.create(blogs,() => process.exit(0))
