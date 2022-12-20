const array = ["Filip" , "happy", "gym"];

function tellStory(arr) {
   let name = "";
   let mood = "";
   let activity = "";

   for(let element of arr) {
      if(element = arr[0]) {
         name = element;
      }
      if(element = arr[1]) {
         mood = element;
      }
      if (element = arr[2]) {
         activity = element;
      }
   }
   return `This is ${name}. He is ${mood} so he is going to the ${activity}`;
}

console.log(tellStory(array));