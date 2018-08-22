// Set string that we're going to decode
const stringToDecode = 'craft block argon meter bells brown croon droop';
// Set up the cipher
// property on the key is (character position - 1)
const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

// Function that decodes the entire string
// by calling decodeCharacter(word) multiple times
function decodeString(string) {
  // Create an array to hold the input string split into an array separated by spaces
  // 'craft block' => [c,r,a,f,t,...] with no spaces
  const stringSplitArr = string.split(' ');
  // Set up an array to hold decoded characters
  const newArr = [];
  // Loop over array of coded characters
  // "For each character => push decoded character to newArr"
  stringSplitArr.forEach(character => newArr.push(decodeCharacter(character)));
  // Return newArr (the decoded string) by joining it into a string
  // with no separators
  return newArr.join('');
}

// Function that decodes a word
// by finding the index of the letter using the cipher
function decodeCharacter(word) {
  // craft
  // Searches the array of cipher keys
  // Get the first character of a word by using charAt(0)
  // Getting all the valid cipher keys to check using a conditional
  // "For each key => if key === firstCharacter"
  if (Object.keys(cipher).find(key => key === word.charAt(0))) {
    // return word[0/1/2/3]
    return word[cipher[word.charAt(0)]];
  } else {
    // We didn't find the key in the cipher, so we push a space
    return ' ';
  }
}
// Console dot log it
console.log(decodeString(stringToDecode));
