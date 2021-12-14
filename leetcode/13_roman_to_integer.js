var romanToInt = function (s) {
  const romanTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const n = s[i + 1];
    let v;
    if (romanTable[c] < romanTable[n]) {
      v = -romanTable[c];
    } else v = romanTable[c];

    sum += v;
  }

  return sum;
};

console.log(romanToInt('IX'));
