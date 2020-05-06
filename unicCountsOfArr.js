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


/*
arrays.js
Реализуйте и экспортируйте по умолчанию функцию getSameCount. Она работает так:

Принимает на вход два массива.
Считает количество элементов, которые присутствуют в обоих массивах, без учёта повторяющихся.
*/
/*примеры тестов
mport getSameCount from '../arrays.js';

it('getSameCount', () => {
  const actual1 = getSameCount([], []);
  expect(actual1).toBe(0);

  const actual2 = getSameCount([1, 2], []);
  expect(actual2).toBe(0);

  const actual3 = getSameCount([0], ['one', 'two']);
  expect(actual3).toBe(0);

  const actual4 = getSameCount([5, 3, 3], ['one', 'two']);
  expect(actual4).toBe(0);

  const actual5 = getSameCount([1, 2, 3], [2, 8, 10]);
  expect(actual5).toBe(1);

  const actual6 = getSameCount([1, 8, 2, 3], [2, 8, 10]);
  expect(actual6).toBe(2);
	*.