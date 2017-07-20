/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';
 
/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
}); */

describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901235') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;
 
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

function pushPrefixes(array, start, end) {
  for(var i = start; i <= end; i++) {
    array.push(i);
  }
}

function testByPrefixAndLength(prefix, length, expectedCard) {
  var num = prefix.toString();
  while (num.length < length) {
    num += '0';
  }
  return it('has a prefix of ' + prefix + ' and a length of ' + length, function(){
    detectNetwork(num).should.equal(expectedCard);
  });
}

describe('Discover', function() {
  var prefixes = [6011, 65];
  pushPrefixes(prefixes, 644, 649);
  prefixes.forEach(function(prefix) {
    testByPrefixAndLength(prefix, 16, 'Discover');
    testByPrefixAndLength(prefix, 19, 'Discover');
  });
});

describe('Maestro', function() {
  var prefixes = [5018, 5020, 5038, 6304];
  prefixes.forEach(function(prefix) {
    for(var j = 12; j < 20; j++) {
      testByPrefixAndLength(prefix, j, 'Maestro');
    }
  });
});

describe('should support China UnionPay', function() {
  var prefixes = [];
  pushPrefixes(prefixes, 624, 626);
  pushPrefixes(prefixes, 6282, 6288);
  pushPrefixes(prefixes, 622126, 622925);
  prefixes.forEach(function(prefix) {
    for(var j = 16; j <= 19; j++) {
      testByPrefixAndLength(prefix, j, 'China UnionPay');
    }
  });
});

describe('should support Switch', function() {
  var prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  prefixes.forEach(function(prefix) {
    testByPrefixAndLength(prefix, 16, 'Switch');
    testByPrefixAndLength(prefix, 18, 'Switch');
    testByPrefixAndLength(prefix, 19, 'Switch');
  });
});
