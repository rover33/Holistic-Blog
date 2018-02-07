expect = require('chai').expect
    request = require('request')

// Front end test
    describe('Home Page', function() {
        it('Home page status', function(done) {
          request('http://localhost:4200' , function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              console.log('You are home');
              done();
          });
       });
       
    });
    var URL = 'https://holistic-blog.herokuapp.com';

describe("heroku", function() {
	var apiError,apiResponse,apiBody;
	before(function(done) {
		request(URL, function(error, response, body) {
			apiError = error;
			apiResponse = response;
			apiBody = body;
			done();
		});
	});
	it("should return 200 - OK", function() {
		expect(apiResponse.statusCode).to.eq(200);
    });
});
