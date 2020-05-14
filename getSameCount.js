//Мое решение с вложенным циклом

import _ from 'lodash';
getSameCount = (coll, coll2) => {
	const result = [];
	for (const item of coll) {
		for (const subItem of coll2) {
      if (item === subItem) {
				result.push(subItem);
			}
		}
	}
   return _.uniq(result).length;
};
getSameCount([], []); // 0
// старое решение без вложенного цикла с методом uniq
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import { uniq } from 'lodash';
// BEGIN (write your solution here)
const getSameCount = (arr1, arr2) => {
  const uniq1 = uniq([...arr1]);
  const uniq2 = uniq([...arr2]);
  const result = [];
  for (const item of uniq1) {
    if (uniq2.includes(item)) {
      result.push(item);
    }
  }
  return result.length;
};
// END
export default getSameCount;
//решение учителя
// BEGIN
const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = uniq(coll1);
  const uniqColl2 = uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
      }
    }
  }

  return count;
};

export default getSameCount;
/*
Реализуйте и экспортируйте по умолчанию функцию getSameCount. Она работает так:

Принимает на вход два массива.
Считает количество элементов, которые присутствуют в обоих массивах, без учёта повторяющихся.
Изучите примеры в README и тестах, чтобы лучше разобраться, как должна работать функция.

Примеры
getSameCount([], []); // 0
getSameCount([4, 4], [4, 4]); // 1
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2]); // 3
Подсказки
Для получения массива без повторяющихся элементов, используйте uniq из библиотеки lodash.
В целях обучения и прокачки, решите это упражнение с помощью вложенных циклов.
*/
