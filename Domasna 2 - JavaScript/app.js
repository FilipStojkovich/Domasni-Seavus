let userInput = Number(prompt("Which year are you born?"));
console.log(userInput);

let inputValue = (userInput - 4) % 12;
console.log(inputValue);


if (inputValue === 0) {
    console.log("Your chinese zodiac sign is RAT");
} else if (inputValue === 1) {
    console.log("Your chinese zodiac sign is OX");
} else if (inputValue === 2) {
    console.log("You chinese zodiac sign is TIGER");
} else if (inputValue === 3) {
    console.log("Your chinese zodiac sign is RABBIT");
} else if (inputValue === 4) {
    console.log("Your chinese zodiac sign is DRAGON");
} else if (inputValue === 5) {
    console.log("Your chinese zodiac sign is SNAKE");
} else if (inputValue === 6) {
    console.log("Your chinese zodiac sign is HORSE");
} else if (inputValue === 7) {
    console.log("Your chinese zodiac sign is GOAT");
} else if (inputValue === 8) {
    console.log("Your chinese zodiac sign is MONKEY");
} else if (inputValue === 9) {
    console.log("Your chinese zodiac sign is ROOSTER");
} else if (inputValue === 10) {
    console.log("Your chinese zodiac sign is DOG");
} else if (inputValue === 11) {
    console.log("Your chinese zodiac sign is PIG");
} else {
    console.log("You do not have a chinese zodiac sign");
}