function withdrawMoney() {
      let totalMoney = 1000;
      let userMoney = Number(prompt("How much money do you want to withdraw?"));
      let remainingMoney = totalMoney - userMoney;

      if (userMoney <= totalMoney) {
        console.log(`You have withdrawn ${userMoney}$, ${remainingMoney}$ left in the bank!`);
      } else if (userMoney > totalMoney) {
        console.log(`Not enough money!`);
        return remainingMoney;
      } else {
        console.log("The ATM is out of money!");
        return remainingMoney;
      }

      let userMoney1 = Number(prompt("How much money do you want to withdraw?"));
      let remainingMoney1 = remainingMoney - userMoney1;

      if (userMoney1 <= remainingMoney) {
        console.log(`You have withdrawn ${userMoney1}$, ${remainingMoney1}$ left in the bank!`);
      } else if (userMoney1 > remainingMoney) {
        console.log("Not enough money!");
        return remainingMoney1;
      } else {
        console.log("The ATM is out of money!");
        return remainingMoney1;
      }
}


withdrawMoney();