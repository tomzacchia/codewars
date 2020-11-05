## Problem

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

## Solution 

```js
function tribonacci(signature,n){
  if (n === 0) return [];
  
  if (n <= 3) return signature.slice(0,n);
  
  for (let i = 0; signature.length < n; i++) {
    const nextNumberInSequence = signature[i] + signature[i+1] + signature[i+2];
    signature.push(nextNumber);
  }
  
  return signature;
}
```
