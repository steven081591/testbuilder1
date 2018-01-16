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
    cardName: 'Discover',
    prefix: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    length: [16, 19]
  },
  { 
    cardName: 'Maestro',
    length: [12,13,14,15,16,17,18,19],
    prefix: ['5018','5020','5038','6304']
  },
  {
    cardName: 'China UnionPay',
    length: [16,17,18,19],
    prefix: prefixGenerator(622126,622925).concat(prefixGenerator(624,626).concat( prefixGenerator(6282,6288)))
  },
  {
   cardName: 'Switch',
    length: [16,18,19],
    prefix: ['4903','4905','4911','4936','564182','633110','6333','6759']
  }
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


function testBuilder(prefix, length, cardName){
  var expect = chai.expect
  it('has a prefix '+prefix+ ' and a length of '+length, function(){
    expect(detectNetwork(prefix + getRandom(length - prefix.length).toString())).to.equal(cardName)
  });
}


describe('Diner\'s Club', function() {
  allCards('Diner\'s Club')
});

describe('American Express', function() {
  allCards('American Express');
});

describe('Visa', function() {
  allCards('Visa');
});

describe('MasterCard', function() {
  allCards('MasterCard');
});

describe('Discover', function() {
  allCards('Discover')
});

 describe('Maestro', function() {
  allCards('Maestro')
});
 
 describe('China UnionPay', function() {
   allCards('China UnionPay')
 })

 describe('Switch', function() {
   allCards('Switch')
 })


