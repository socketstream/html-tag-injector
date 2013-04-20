var fs = require('fs');
var should = require('should');
var injector = require('../');

function fixture(filename){
  return fs.readFileSync(__dirname + '/fixtures/' + filename, 'utf8');
}

describe('finding tags in HTML', function(){

  it('should work with with lowercase tags (1.in.html)', function(){
    injector(fixture('1.in.html')).should.equal(fixture('1.out.html'));
  });

  it('should work with with uppercase tags and HEAD attributes (2.in.html)', function(){
    injector(fixture('2.in.html')).should.equal(fixture('2.out.html'));
  });

});