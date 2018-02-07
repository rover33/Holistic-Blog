let Blog= require('../models/blog'),
    expect = require('chai').expect
    request = require('request')
    
//new festival tests
describe('checking if blog model works', function(){
    describe('new', function(){
        it('initializes a a new blog', function(){
            var blog = new Blog();
            blog = "new blog"
            expect(blog).to.equal('new blog')
        });
        it('blog has a name', function(){
            var blog = new Blog();
            blog.name = "Calcium"
            expect(blog.name).to.equal('Calcium')
        });
        it("get a blog title", function(){
            var blog = new Blog();
            blog.blogTitle = "Holistic blog rules"
            expect(blog.blogTitle).to.equal("Holistic blog rules")
        });

        it("blog has a body", function(){
            var blog = new Blog();
            blog.blogBody = "has a body"
            expect(blog.blogBody).to.equal("has a body")
        });
    })

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

})