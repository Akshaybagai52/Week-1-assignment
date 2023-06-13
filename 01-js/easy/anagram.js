/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  } else {
    const stringa = str1.sort((a, b) => a - b)
    const stringb = str2.sort((a, b) => a - b)
    stringa === stringb ? true : false

  }

}

module.exports = isAnagram;
