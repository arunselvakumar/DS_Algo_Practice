/**
 * @param {string} input
 * @return {boolean}
 */
var isValid = function (input) {
  const dict = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let i = 0;
  const stack = [];
  while (i <= input.length) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      stack.push(input[i]);
    } else {
      if (dict[stack[stack.length - 1]] === input[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
    i++;
  }

  return true;
};

console.log(isValid('}'));
