const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  // BEGIN (write your solution here)
  if (begin > end) {
  return 0 / '0';
  }
	if (begin === end) {
	return end;
	}
	return begin + sequenceSum(begin + 1, end);
}

sequenceSum(1, 5)


/*
Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.
*/