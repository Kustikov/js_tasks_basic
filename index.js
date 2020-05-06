// BEGIN (write your solution here)
const summ = (num) => {
  const newNum = num.toString();
  let result = 0;
  for (let i = 0; i < newNum.length; i += 1) {
    result += Number(newNum[i]);
  }
  return result;
};
const addDigits = (n) => {
  let endCount = summ(n);
  while (endCount >= 10) {
    endCount = summ(endCount);
  }
  return endCount;   
};
// ENDn
addDigits(124356474758);
