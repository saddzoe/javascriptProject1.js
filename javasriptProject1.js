function palindrome(str) {
  let originalStr = str.replace(/\W+|_/g, " ").toLowerCase();
  let backwardWord = originalStr.split("").reverse().join("");
  
  if (originalStr != backwardWord) {
    return false;
  }
  return true;
}

