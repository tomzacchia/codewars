// Codewars problem => https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {
  var wordFrequencyMap = new Map();
  
  text.split(' ')
    .map(sanitizeWord)
    .filter(removeInvalidStrings)
    .forEach(addWordFrequencyCount)

  var sortedWordFrequencyMap = [...wordFrequencyMap].sort(sortByFrequency);

  var minArrayCutoff = 3;
  if(sortedWordFrequencyMap.length < (minArrayCutoff + 1)) return [...sortedWordFrequencyMap].map(formatOutput);
  else return [...sortedWordFrequencyMap].slice(0,3).map(formatOutput);
  
  function addWordFrequencyCount(word) { 
    if (wordFrequencyMap.get(word)) {
      var currentCount = wordFrequencyMap.get(word);
      wordFrequencyMap.set(word, currentCount + 1);
    } else {
      wordFrequencyMap.set(word, 1);
    }
  }
}

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"))
// ["e", "ddd", "aa"]

//   IMPLEMENTATION DETAILS ===================================
function formatOutput(tuple) {
  var wordIndex = 0;
  return tuple[wordIndex];
}

function removeInvalidStrings(word) {
  if (!word.length) return false;
  else if ((word.length === 1) && (word === "'")) return false;

  return true;
}

function sanitizeWord(word) {
  return  word.replace(/[^a-z']/gi, '').toLowerCase();
}

function sortByFrequency(a,b) {
  if(a[1] > b[1]) return -1;
  else if (a[1] < b[1]) return 1;
}
