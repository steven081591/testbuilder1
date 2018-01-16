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
  
  function prefixGenerator(start, stop) {
    allnum = [];
    for (var prefix = start; prefix <= stop; prefix++){
      allnum.push(prefix.toString());
    }
    return allnum;
  }

var detectNetwork = function(cardNumber) {
    let len = cardNumber.length
    let prefix1 = Number(cardNumber.slice(0,1));
    let prefix2 = Number(cardNumber.slice(0,2));
    let prefix3 = Number(cardNumber.slice(0,3));
    let prefix4 = Number(cardNumber.slice(0,4));
    let prefix6 = Number(cardNumber.slice(0,6));
    
    
           if (len === 14 && (prefix2 === 38 || prefix2 === 39)) {
        return 'Diner\'s Club';
    } else if ((prefix2 === 34 || prefix2 === 37) && len === 15) {
        return 'American Express';
    }else if ((prefix4.length > prefix1.length && prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 6333 || prefix4 === 6759 || prefix4 === 4936 || prefix6 === 564182 || prefix6 === 633110 && (len === 16 || len === 18 || len === 19 ) )) {
        return 'Switch';
    } else if (prefix1 === 4 && (len === 13 || len === 16 || len === 19 )) {
        return 'Visa';
    } else if ((prefix2 === 51 || prefix2 === 52 || prefix2 === 53 || prefix2 === 54 || prefix2 === 55) && len === 16) {
        return 'MasterCard';
    } else if ((prefix4 === 6011 || prefix3 === 644 || prefix3 === 645 || prefix3 === 646 || prefix3 === 647 || prefix3 === 648 || prefix3 === 649 || prefix2 === 65) && (len === 19 || len === 16)) {
        return 'Discover';
    } else if ((prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304) && (len === 12 || len === 13 || len === 14 || len === 15 || len === 16 || len === 17 || len === 18 || len === 19)) {
        return 'Maestro';
    } 
    
    for (var p = 622126; p <= 622925; p++) {
      let num = Number(p)
        if ((num === prefix6) && (len === 16 || len === 17 || len === 18 || len === 19)) {
            return 'China UnionPay'
        }
    }  
    
    for (var p = 624; p <= 626; p++) {
      let num = Number(p)
        if ((num === prefix3) && (len === 16 || len === 17 || len === 18 || len === 19)) {
            return 'China UnionPay'
        }
    }

    for (var p = 6282; p <= 6288; p++) {
        let num = Number(p)
          if ((num === prefix4) && (len === 16 || len === 17 || len === 18 || len === 19)) {
              return 'China UnionPay'
          }
      }

};


