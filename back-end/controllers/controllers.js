require('../models/index');
const Blog = require('../models/blog');

function getRoot(response){
	//res.sendFile(path.join(__dirname + '/dist/index.html'));
	response.send('Home Page for now until we setup the /dist/index.html');
};

module.exports.getRoot = getRoot;