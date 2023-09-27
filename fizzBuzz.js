for (let i = 1; i <= 100; i++) {
  /* declare a variable i with the value of 1,
this loop will continue to run as long as i is less than or equal to 100,
add 1 to current value after each iteration*/
  if (i % 3 === 0 && i % 5 === 0) {
    /* check if i is equal to 3 and 5,
  by checking if both numbers are divisible without any remainder,
  if so, console.log FizzBuzz*/
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    //else if a singular number is divisible by 3 without a remainder
    console.log("Fizz"); //then console log
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  } //output: 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz....ect
}
