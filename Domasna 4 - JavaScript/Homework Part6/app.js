function printFullNames(first, last) {
    let result = [];
    for (let i = 0 ; i < first.length; i++) {
        result.push(`${i + 1}. ${first[i]} ${last[i]}`); 
    }
    console.log(result);
}

const firstName = ["Bob", "Jill"];
const lastName = ["Gregory", "Wurtz"];

printFullNames(firstName,lastName);