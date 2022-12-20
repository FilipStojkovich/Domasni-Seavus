 const array = [5, 22, -4, 31, 2]  

   function sumOfMinMax(arr) {
       let max = arr[0];
       let min = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
      }
      for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
      }
      let sum = max + min;
      console.log(`The largest number is ${max}, the lowest number is ${min}, the sum is ${sum}`);
   }
   
   sumOfMinMax(array);