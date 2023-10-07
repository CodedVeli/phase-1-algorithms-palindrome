function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord === word;
}

/* 
  Add your pseudocode here

  - create a variable to hold the reversed word
  - iterate through the word backwards
  - add each letter to the reversed word
  - check if the reversed word is equal to the original word
  - return the result
*/

/*
  Add written explanation of your solution here

  I created a variable to hold the reversed word. 
  Then I iterated through the word backwards and added each letter to the reversed word. 
  Finally, I checked if the reversed word was equal to the original word and returned the result.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
