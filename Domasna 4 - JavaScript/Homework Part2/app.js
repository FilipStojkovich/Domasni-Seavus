function sumArray(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function validateNumber(num) {
    if(num !== "number") {
        return num;
    }
    console.log("Invalid number");
}

const myArray = [4 ,6, 23, 28, 45];

console.log(sumArray(myArray));
console.log(validateNumber(myArray));