let originArr = [20, 50, 30, 60, 200]; //create an array and fill with numbers
let reverseArr = []; //create an empty array to store the number values in originArr in reverse

for (let i = originArr.length - 1; i >= 0; i--) {
  /* start the i at the last element
of originArr, iterate backwords through the array untill it reaches the first element*/
  reverseArr.push(originArr[i]); //push and or populate reverseArr with originArr elements in reverse
}

console.log(reverseArr);
//output: [200, 60, 30, 50, 20]
