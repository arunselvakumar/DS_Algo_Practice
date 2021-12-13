var reverseNumber = (num) => {
  let mod = 0;
  let newNumber = 0;
  while (num !== 0) {
    mod = num % 10;
    num = ~~(num / 10);
    newNumber = newNumber * 10 + mod;
  }

  return newNumber;
};
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  return x === reverseNumber(x);
};

console.log(isPalindrome(-121));
