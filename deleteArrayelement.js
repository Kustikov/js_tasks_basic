/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const getSameParity = (coll) => {
  const result = [];
  const check = (coll[0] % 2 === 0);
  if (coll.length === 0) {
    return result;
  }
  for (const item of coll) {
    if (check && item % 2 === 0) {
      result.push(item);                   
    } else if (!check && item % 2 !== 0) {
      result.push(item);
    }
  }
  return result;
};
// END
export default getSameParity;

/*
arrays.js
Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.
*/