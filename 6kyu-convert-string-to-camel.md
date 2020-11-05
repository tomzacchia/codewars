Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


```js 
function toCamelCase(str){
  if (str.length === 0) return str;
  
  const separatedWords = str.replace(/[^a-zA-Z0-9]+/g, " ").split(" ");
  
  function capitalizeFirstLetter(word, index) {
    if (index === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  const capitalizedWords = separatedWords.map(capitalizeFirstLetter);
  
  return capitalizedWords.join("");
}

```
