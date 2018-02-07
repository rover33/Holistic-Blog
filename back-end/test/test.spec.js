let Blog= require('../models/blog'),
    expect = require('chai').expect
    request = require('request')
    
//new festival tests
describe('checking if blog model works', function(){
    describe('new', function(){
        it('initializes a blog festival', function(){
            var blog = new Blog();
            blog.name = "Calcium"
            expect(blog.name).to.equal('Calcium')
        });
        it("get a blog title", function(){
            var blog = new Blog();
            blog.blogTitle = "Holistic blog rules"
            expect(blog.blogTitle).to.equal("Holistic blog rules")
        });
    })
})