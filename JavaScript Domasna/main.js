alert("Welcome");

let onePhone = 119.95;
console.log("The price of one phone without tax is:", onePhone,"$")

let taxRate = Math.round(onePhone * 0.05);

let onePhoneWithTax = Math.round(onePhone + taxRate);
console.log("The price of one phone with tax is:", onePhoneWithTax,"$");

let totalPrice = Math.round(onePhoneWithTax * 30);
console.log("The price for 30 phones is:", totalPrice,"$")