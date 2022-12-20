let paragraphOne = document.querySelector(".paragraph");
let paragraphTwo = document.querySelector(".second");
let headerOne = document.getElementById("myTitle");
let headerTwo = document.getElementsByTagName('h1')[1];
let headerThree = document.getElementsByTagName('h3')[0];

paragraphOne.innerHTML = "I made changes to the first paragraph";

paragraphTwo.innerHTML = "I changed the second paragraph";

headerOne.innerText = "Homework Part1";

headerTwo.innerHTML = "I changed this too";

headerThree.innerHTML = "This one goes last";