let userInput = Number(prompt("Which year are you born?"));

if(Number.isNaN(userInput)) {
    console.log("Invalid input");
} else {
    console.log(userInput);
}

let inputValue = (userInput - 4) % 12;
if (Number.isNaN(inputValue)) {
    console.log("Invalid input")
} else {
    console.log(inputValue);
}

switch(userInput,inputValue) {
    case 0:
        console.log("Your chinese zodiac sign is RAT");
        break;
    case 1:
        console.log("Your chinese zodiac sign is PIG");
        break;
    case 2:
        console.log("Your chinese zodiac sign is DOG");
        break;
    case 3:
        console.log("Your chinese zodiac sign is OX");
        break;
    case 4:
        console.log("Your chinese zodiac sign is TIGER");
        break;
    case 5:
        console.log("Your chinese zodiac sign is RABBIT");
        break;
    case 6:
        console.log("Your chinese zodiac sign is DRAGON");
        break;
    case 7:
        console.log("Your chinese zodiac sign is SNAKE");
        break;
    case 8:
        console.log("Your chinese zodiac sign is HORSE");
        break;
    case 9:
        console.log("Your chinese zodiac sign is GOAT");
        break;
    case 10:
        console.log("Your chinese zodiac sign is MONKEY");
        break;
    case 11:
        console.log("Your chinese zodiac sign is ROSTER");
        break;
    default:
        console.log("You don't have a chinese zodiac sign");
        break;
}