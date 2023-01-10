const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const categories = ['Football','Films','Cities'];
const footballTeams = ["manchester","arsenal"];
const films = ["avatar", "gladiator"];
const cities = ["skopje", "prilep"];
let lives = 10;


let randomCategory = categories[Math.floor(Math.random()*categories.length)];

let chosenWord = ""; 
if (randomCategory === categories[0]) {
    chosenWord = footballTeams[Math.floor(Math.random()*footballTeams.length)];
} else if(randomCategory === categories[1]) {
    chosenWord = films[Math.floor(Math.random()*films.length)];
} else if(randomCategory === categories[2]) {
    chosenWord = cities[Math.floor(Math.random()*cities.length)];
};

const holdDiv = document.querySelector("#hold");    
let ul = document.createElement("ul");
ul.classList.add("ulMain");
holdDiv.appendChild(ul);


// for each letter of chosen word, creates an underscore and appends it to the list
for(let i = 0; i < chosenWord.length; i++) {
    let li = document.createElement("li");
    li.classList.add(`li${i}`)
    li.innerHTML = "_";
    ul.appendChild(li);
    }

console.log(chosenWord);

const chosenCategory = document.querySelector("#categoryName");
chosenCategory.innerHTML = `The chosen category is ${randomCategory}`;



const alphabetDiv = document.querySelector(".buttons");
let listItems = ul.children;

for(let i = 0; i < alphabet.length; i++) {
    let button = document.createElement("button");
    button.classList.add("btn-list");
    button.innerHTML = alphabet[i];
    button.addEventListener("click", function(event) {
        let letter = event.target.innerHTML;
        for(let i = 0; i < chosenWord.length; i++) {
            if(chosenWord[i] === letter) {
                let printLetter = document.querySelector(`.li${i}`);
                printLetter.innerText = chosenWord[i];
                holdDiv.appendChild(printLetter);
            } else if(chosenWord[i] !== letter) {
                userLives.innerHTML = `You have ${lives - 1} lives`;
            }
        } 
    })
    alphabetDiv.appendChild(button);
}


const userLives = document.querySelector("#lives");
userLives.innerHTML = `You have ${lives} lives`;

// ova ostaj go ne go glej 

// button.addEventListener("click", function(event) {
//     let letter = event.target.innerHTML;
//     for(let i = 0; i < chosenWord.length; i++) {
//         let letterPositions = chosenWord.indexOf(chosenWord[i]);
//         console.log(letterPositions)
//         // if(chosenWord[i] === letterPositions) {
//         //     let printLetter = document.querySelector(`.li${i}`);
//         //     printLetter.innerHTML = chosenWord[i];
//         //     holdDiv.appendChild(printLetter);
//         // }
//     }
// })