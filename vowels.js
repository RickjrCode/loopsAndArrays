function countItAll(word) {
  //create a funtion
  const vowels = "aeiou"; //declare a variable that holds lowercase vowls
  let vowelCount = 0;
  let consCount = 0; //declare a variable and set its value to zero, this can later be changed

  for (let i = 0; i < word.length; i++) {
    /* set i to 0, as long as i is less than the length of word,
  the loop will continue to execute, the value of i is  incremented by 1*/
    const char = word[i]; //declare a variable and assign the value of the character at the i-th position in the word
    if (vowels.includes(char)) {
      //check whether the character stored in the char variable is a vowel
      vowelCount++; //if the character is a vowel, increment the value of vowelCount by 1
    } else if (char.match(/[a-zA-Z]/)) {
      /*check whether the character stored in char variable
    is a letter in the English alphabet*/
      consCount++; //if the character is a letter, increment the value of consCount by 1
    }
  }
  return [
    word,
    vowelCount,
    consCount,
  ]; /* return an array containing the word and the counts
  of vowels and consonants*/
}

const wordInfo = countItAll("onomonopia"); //declare wordInfo and put countItAll (function) in to the variable
console.log(wordInfo); /*onomonopia is the arguement we will pass onto
the countItAll function. output: ['onomonopia', 6, 4]*/
