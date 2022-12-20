const array = [3, 6, 9 , 18, 26, 39];

function findNumber(array, type){
    let result = [];
    if(type === "even"){
       for (let num of array) {
           if(num % 2 === 0){
               result.push(num);
           }
       } 
       return result;
    } else if(type === "odd"){
        for (let num of array) {
            if(num % 2 !== 0){
                result.push(num);
            }
        } 
        return result;
    } else {
        console.log("The type was not correct. Please enter odd or even");
        return null;
    }
}

console.log(findNumber(array, "even"));
console.log(findNumber(array, "odd"));