const reverseNumber = (num) => {
  let reversedNumber = 0;
  while (num !== 0) {
    const mod = num % 10;
    num = ~~(num / 10);
    reversedNumber = reversedNumber * 10 + mod;
  }
  return reversedNumber;
};

console.log(reverseNumber(6771));
