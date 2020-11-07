## [Problem](https://www.codewars.com/kata/5629db57620258aa9d000014) 

Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

```
  s1="Are the kids at home? aaaaa fffff"
  s2="Yes they are here! aaaaa fffff"
  mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

```

## Interpretation

At first glance the problem seems straightforward. We want to count the frequency of every lowercase letter for two given strings. If both strings have a frequency count for the same letter, i.e ``` str1 = "eee", str2="e" ```, we take the greater frequency cout of the two, in this case ```frequency_of_e = 3``` and perform some additional procedures. When I first attempted the problem my code was failing a lot of test cases and I furiously changed the algorithm one line a time to see what could have cause the tests to fail. I found that the example solutions provided were not clear enough as to how to final output should be formatted. A more clear example would have been something closer to the following:

```js
str1 = "In many !& languages";
str2 = "there's a pair of functions 1123";

solution = "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt""
```

The solution above would past testing due to having met all of the following criterias:
* only lowercase letters from a to z are in the solution
* the frequency of each letter is in descending order, "aaa" placed before "gg"
* all letters that have the same frequency count as other letters are ordered by of prefix ("1" < "2" < "=") AND within each prefix ordered alphabetically
```js "1:gg/2:ee/2:ff"  // "e" < "g", however "1" < "2" ```

## Pseudo Code

1. count the frequency of each character in a string and store the result in an object such as that obj[key] = frequency_count
2. compare every valid, lower case a-z, character and return the result of the comparison with the following structure
``` { precedence: "1", letter: "a", frequency: 2 } ```
- Note: precedence, 1, changes according to which string has a greater frequency of a specific letter
3. sort in order of: frequency, precedence and finally letter.
4. format and return solution

## [Solution](https://github.com/tomzacchia/codewars/blob/main/code/4kyu-strings-mix.js)
