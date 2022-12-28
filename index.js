function isPalindrome(word) {
  let reverseWord = '';
  for (let i = word.length - 1; i >= 0; i--){
    reverseWord += word[i]
  }
return reverseWord === word
}

/* 
  iterate over each letter of string,
    if string is palindrome: 
      return true
    else: 
      return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log('Expecting : true')
  console.log('=>', isPalindrome('kayak'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
