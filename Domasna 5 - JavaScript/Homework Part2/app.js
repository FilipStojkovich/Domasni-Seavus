const array = [2, 4, 5, 7, 9,];

let contentDiv = document.querySelector("#div-one");

function printNumbers (array, element) {
    element.innerHTML = "";
    element.innerHTML += `<ol id="ordered-list"><ol>`;
    let orderedList = document.getElementById("ordered-list");
    orderedList.innerHTML = "";
    for(let i = 0; i < array.length; i++) {
        orderedList.innerHTML += `<li>${array[i]}</li>`;
    }
}

let paragraphOne = document.querySelector("#div-two");

function printSum(array,sum) {
    sum.innerHTML = "";
    sum.innerHTML += `<p id="par-one"></p>`;
    let sumNumbers = document.getElementById("par-one");
    sumNumbers.innerHTML = "";
    for(let i = 0; i < array.length; i++) {
        let sum = array[0] + array[1] + array[2] + array[3] + array[4]; 
           sumNumbers.innerHTML = `(${array[0]} + ${array[1]} + ${array[2]} + ${array[3]} + ${array[4]} = ${sum})`;
    }
}   



printNumbers(array,contentDiv);
printSum(array,paragraphOne);