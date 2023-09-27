const originArr = [2, 4, 6, 8, 11, 20, 15, 22]; //create an array with numbers
const oddArr = []; //create another array to store odd numbers only
for (let i = 0; i < originArr.length; i++) {
  /*declare i as 0, the loop will continue as long as the value of i is less than the length of originArr, 
  the value of i will increse by one after each iteration*/
  if (originArr[i] % 2 !== 0) {
    //if the remainder obtained from originArray is not equal to zero, it is odd
    oddArr.push(originArr[i]); // fill in oddArr with odd numbers from originArr
  }
}

console.log(oddArr); //output: [11, 15]
