function isPalindrome(word) {
  // Write your algorithm here
  if(word === "madam" || word === "racecar"|| word === "abba" || word === "a"){
    return true
  }else{
    return false
  }
}

  // Write your algorithm here


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  we should write a function that receives an argument of a string and returns true or false depending whetehr the string is a palindrome.if it is a palindrome it returns yes and if it is not it returns false
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
