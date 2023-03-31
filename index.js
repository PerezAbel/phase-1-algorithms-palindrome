function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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

function isPalindrome(string) {
  // Remove all non-alphanumeric characters and convert to lowercase
  var cleanString = string.replace(/[^0-9a-z]/gi, '').toLowerCase();
  // Compare the clean string with its reverse
  return cleanString === cleanString.split('').reverse().join('');
}

// Example usage
console.log(isPalindrome('mom')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
