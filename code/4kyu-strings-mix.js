## [Problem](https://www.codewars.com/kata/51e056fe544cf36c410000fb)

function mix(s1, s2) {
    var s1CharFrequency = charFrequencyMap(s1);
    var s2CharFrequency = charFrequencyMap(s2);

    var alphabetArray = generateCharArray('a', 'z');

    var higherCharFrequencyArray = alphabetArray
      .map(getGreaterLetterFrequency)
      .filter(removeNonEmptyStrings)
      .sort(sortByCriteria)
      .map(formatLetterFrequency);

    return higherCharFrequencyArray.join('/');
  

    //====================================     IMPLEMENTATION DETAILS
   
    function charFrequencyMap(str) {
      var charFrequencyMap = {};
    
      str.split('').forEach(function countCharFrequency(char) {
          charFrequencyMap.hasOwnProperty(char) ? charFrequencyMap[char] += 1 : charFrequencyMap[char] = 1;
      })
      
      return charFrequencyMap;
    }
  
    function getGreaterLetterFrequency(currentLetter) {
        var letterFrequencyS1 = s1CharFrequency.hasOwnProperty(currentLetter) ? s1CharFrequency[currentLetter] : 0;
        var letterFrequencyS2 = s2CharFrequency.hasOwnProperty(currentLetter) ? s2CharFrequency[currentLetter] : 0;

        // based on problem criteria, frequency of 1 is invalid
        var isLetterFrequencyInvalid = (letterFrequencyS1 <= 1 && letterFrequencyS2 <= 1) || (!letterFrequencyS1 && !letterFrequencyS2);

        if (isLetterFrequencyInvalid) return '';

        if (letterFrequencyS1 > letterFrequencyS2) {
            return {
                precedence: "1",
                letter: currentLetter,
                frequency: letterFrequencyS1
            }
        } else if (letterFrequencyS2 > letterFrequencyS1) {
            return {
                precedence: "2",
                letter: currentLetter,
                frequency: letterFrequencyS2
            }
        } else if (letterFrequencyS1 === letterFrequencyS2) {
            return {
                precedence: "=",
                letter: currentLetter,
                frequency: letterFrequencyS1
            }
        }
    }
}

function sortByCriteria(currentStr, nextStr) {
    // sort by frequency, then precedence and finally alphabetically

    if (currentStr.frequency > nextStr.frequency) return -1;
    else if (currentStr.frequency < nextStr.frequency) return 1;
    
    // "1" < "2" < "="
    if (currentStr.precedence > nextStr.precedence) return 1;
    else if (currentStr.precedence < nextStr.precedence) return -1;

    if (currentStr.letter > nextStr.letter) return 1;
    else if (currentStr.letter < nextStr.letter) return -1;
}

function removeNonEmptyStrings(frequencyObj) {
    if (frequencyObj.frequency)
        return true;
    else
        return false;
}

function formatLetterFrequency(str) {
    //    i.e str = {precedence: "1", letter: "a", frequency: 3}

    var repeatedLetter = "";

    for (var i = 0; i < str.frequency; i++) {
        repeatedLetter += str.letter;
    }

    return `${str.precedence}:${repeatedLetter}`;
}

function generateCharArray(charStart, charEnd) {
    var charArry = []
      , start = charStart.charCodeAt(0)
      , end = charEnd.charCodeAt(0);

    for (; start <= end; start++) {
        var currentCharacter = String.fromCharCode(start);
        charArry.push(currentCharacter);
    }

    return charArry;
}
