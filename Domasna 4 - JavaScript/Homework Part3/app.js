function printArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        let result = arr.join(" ");
        return result;
    }
}

const array = ["Hello", "there", "students", "of", "SEDC", "!"];
console.log(printArray(array));