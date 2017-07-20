// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
	// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
	// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
	// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
	// 	China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

	// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
		// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix. - ELSE IF SWITCH BEFORE VISA
	var cardName = '';
  cardNumberToNum = Number(cardNumber);
  var dinersClub = /^3(8|9)\d{12}/;
  var americanExpress = /^3(4|7)\d{13}/;
  var switchCard = /^(?=^(4903|4905|4911|4936|564182|633110|6333|6759)\d*$)(?:.{16}|.{18}|.{19})$/;
  var visa = /^(?=^4\d*$)(?:.{13}|.{16}|.{19})$/;
  var masterCard = /^5[1-5]\d{14}/;
  var discover = /^(?=^(6011|64[4-9]|65)\d*$)(?:.{16}|.{19})$/;
  var maestro = /^(5018|5020|5038|6304)\d{8,15}/;
  var chinaUnionPay = /^(?=((^622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]|9([0-1][0-9]|2[0-5])))|62[4-6]|628[2-8])\d*$)(?:.{16,19})$/;




  if(dinersClub.test(cardNumberToNum)) {
  	cardName = "Diner's Club";
  } else if(americanExpress.test(cardNumberToNum)) {
  	cardName = 'American Express';
  } else if(switchCard.test(cardNumberToNum)) {
  	cardName = 'Switch';
  } else if(visa.test(cardNumberToNum)) {
  	cardName = 'Visa';
  } else if(masterCard.test(cardNumberToNum)) {
  	cardName = 'MasterCard';
  } else if(discover.test(cardNumberToNum)) {
  	cardName = 'Discover';
  } else if(maestro.test(cardNumberToNum)) {
  	cardName = 'Maestro';
  } else if(chinaUnionPay.test(cardNumberToNum)) {
  	cardName = 'China UnionPay';
  } else {
  	cardName = 'None';
  }
  return cardName;
};


