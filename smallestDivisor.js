// BEGIN (write your solution here) Императивно итеративным процессом бех рекурсии
const smallestDivisor = (n) => {
  let result = 2;
  let divisor = 2;
  if (n < 1) {
		return 0 / 'Nan';
	} else if (n === 1) {
		return 1;
	};
  while (divisor <= n && n % divisor !== 0) {
  	result = n % divisor;
  	divisor = divisor + 1;
  };
return divisor;
};
// END
smallestDivisor(1);
