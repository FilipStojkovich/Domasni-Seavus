function conversion() {
// Converting human years to dog years //

    let humanYears = prompt("How old is your dog in human years?");
    let humanYearsToDogYears = humanYears * 7;

    let conversionOne =  humanYearsToDogYears;
    console.log(`Your dog is ${conversionOne} dog years old.`);

// Converting dog years to human years //

    let dogYears = prompt("How old is your dog in dog years?");
    let dogYearsToHumanYears = dogYears / 7;

    let conversionTwo = dogYearsToHumanYears;
    console.log(`Your dog is ${conversionTwo} human years old.`);
}

conversion();