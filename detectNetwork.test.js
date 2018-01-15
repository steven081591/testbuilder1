
var FILL_ME_IN = 'Fill this value in';


function getRandom(length) {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
}

function prefixGenerator(start, stop) {
  allnum = [];
  for (var prefix = start; prefix <= stop; prefix++){
    allnum.push(prefix.toString());
  }
  return allnum;
}

var cards = [
  { 
    cardName: 'Diner\'s Club',
    length: [14],
    prefix: ['38', '39'],
  },
   { 
    cardName: 'American Express',
    length: [15],
    prefix: ['34', '37'],
  },
  { 
    cardName: 'Visa',
    length: [13,16,19],
    prefix: ['4'],
  },
  { 
    cardName: 'MasterCard',
    length: [16],
    prefix: ['51','52','53','54','55'],
  },
  {
    name: 'Discover',
    prefix: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    length: [16, 19]
  },
  { 
    cardName: 'Maestro',
    length: [12,13,14,15,16,17,18,19],
    prefix: ['5018','5020','5038','6304'],
  },

]

function allCards(name) {
  cards.forEach(card => {
    if (card.cardName === name) {
      card.prefix.forEach(prefix => {
        card.length.forEach(length => {
          testBuilder(prefix, length, name)
        })
      })
    }
  })
}



//console.log(allCards())

function testBuilder(prefix, length, cardName){
  var expect = chai.expect
  it('has a prefix '+prefix+ ' and a length of '+length, function(){
    expect(detectNetwork(prefix + getRandom(length - prefix.length).toString())).to.equal(cardName)
  });
}




describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901237') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var expect = chai.expect

   allCards('American Express')
  // testBuilder('34', 15, 'American Express')

});

describe('Visa', function() {
  var expect = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

// describe('Discover', function() {
//   // Chai lets you write more human-readable tests that throw helpful errors.
//   // Expect syntax is one way to do this, but there are others. 
//   // If you want to know more, check out the documentation. 
//   //   http://chaijs.com/api/bdd/
//   var expect = chai.expect;
 
//   it('has a prefix of 6011 and a length of 16', function() {
//     expect(detectNetwork('5412345678901234')).to.equal('Discover');
//   });
 
// });

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function(){
    expect(detectNetwork('6539123456789012')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function(){
    expect(detectNetwork('6512123456789012345')).to.equal('Discover');
  });





chinaNums(622126, 622925)

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16'), function(){
     expect(detectNetwork(prefix + '1234567890123')).to.equal('Discover');
      };
      
      it('has a prefix of ' + prefix + ' and a length of 19'), function() {
     expect(detectNetwork(prefix + '1234567890123456')).to.equal('Discover');
      };
    })(prefix);
  }

});


// describe('Maestro', function() {
//   var expect = chai.expect;
  
//   var prefix = ['5018', '5020', '5038', '6304']
//   var string15 = '123456789012345'
  
//   for (var p of prefix) {
//     for (var x = 12; x<=19; x++) {
//       it('has a prefix of '+prefix[p]+' and a length of '+x, function(){
//         expect(detectNetwork(prefix[p] + string15).to.equal('Maestro'))
//     });
//    }
//   }



// });

// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

// describe('should support China UnionPay')
// describe('should support Switch')
