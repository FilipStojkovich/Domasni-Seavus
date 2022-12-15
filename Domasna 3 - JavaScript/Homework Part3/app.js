function withdrawMoney(money) {
  let totalMoney = 1000;
  let remainingMoney = totalMoney - userMoney;

  if (Number.isNaN(money)) {
    console.log("Invalid Input");
  } else if (money <= totalMoney) {
    console.log(`You have withdrawn ${money}$, ${remainingMoney}$ left in the bank!`);
  } else if (money > totalMoney) {
    console.log(`Not enough money!`);
    return remainingMoney;
  } else {
    console.log("The ATM is out of money!");
    return remainingMoney;
  }
}

let userMoney = Number(prompt("How much money do you want to withdraw?"));

withdrawMoney(userMoney);