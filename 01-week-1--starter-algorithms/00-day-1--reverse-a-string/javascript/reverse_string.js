function reverseString(str) {
  // type your code here
  let newStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i]
  }
  return newStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting: 'yob gib'");
  console.log("=>", reverseString("big boy"))
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * let newString;
 * 
 * for (last index of string; up until index = 0; remove one from index) {
 *  add letter to newString
 * }
 * 
 * return newString
 *
 */