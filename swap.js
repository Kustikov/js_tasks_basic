/* eslint-disable no-param-reassign */
// BEGIN (write your solution here)
const swap = (names, num) => {
  const minIndex = names[num - 1];
  const minInd = names.indexOf(minIndex);
  const maxIndex = names[num + 1];
  const maxInd = names.indexOf(maxIndex);
  const size = names.length;
  if (num !== 0 && num < size - 1) {
    for (let i = minInd; i <= maxInd; i += 1) {
      const temp = names[minInd];
      names[minInd] = names[maxInd];
      names[maxInd] = temp;
    }
  } 
	 return names;
  }

	/*
	Реализуйте и экспортируйте по умолчанию функцию swap, которая меняет местами два элемента массива относительно переданного индекса. Например, если передан индекс 5, то функция меняет местами элементы, находящиеся под индексами 4 и 6.

Параметры функции:

Массив
Индекс
Если хотя бы одного из индексов не существует, функция возвращает исходный массив.
*/