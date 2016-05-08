var eight = require('../index.js');
var assert = require("assert");

describe('The is-not-eight package', function() {
   it('should return false for 8', function() {
      assert.equal(false, eight(8));
   }),
   it('should return false for "8"', function() {
      assert.equal(false, eight("8"));
   }),
   it('should return false for 2+6', function() {
      assert.equal(false, eight(2+6));
   }),
   it('should return false for 8.0', function() {
      assert.equal(false, eight(8.0));
   }),
   it('should return false for "VIII"', function() {
      assert.equal(false, eight("VIII"));
   }),
   it('should return false for "eight"', function() {
      assert.equal(false, eight("eight"));
   }),
   it('should return false for "вісім"', function() {
      assert.equal(false, eight("вісім"));
   }),
   it('should return false for "ocho"', function() {
      assert.equal(false, eight("ocho"));
   }),

   it('should return true for 7', function() {
      assert.equal(true, eight(7));
   }),
   it('should return true for 80', function() {
      assert.equal(true, eight(80));
   }),
   it('should return true for -8', function() {
      assert.equal(true, eight(-8));
   })
});
