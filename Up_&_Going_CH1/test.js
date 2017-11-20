// establish phone price, accessory price, and tax constants
const PRICE = 99.99;
const TAX = 0.08;
const ACCESSORY = 9.99;
const SPEND_LIMIT = 1000.00;
// establish global variables
var bank = Number(prompt("Bank account balance?"));
var total = 0;

//tax calculation function
function addTax(num){
	amt = num + (num * .08);
	return amt;
}
//format price function
function priceFormat(num){
	return "$" + (num.toFixed(2));
}
//buy phones if enough money in spend limit
while(total < SPEND_LIMIT){
	total = total + PRICE;
	//buy accessories if enough money
	if (total < SPEND_LIMIT){
		total = total + ACCESSORY;
	}
}
//calculate tax
var final = addTax(total);
//print amount
console.log(priceFormat(final));

if (final > bank){
	console.log("You cannot afford this!")
}
else{
	console.log("You can afford this!")
}
