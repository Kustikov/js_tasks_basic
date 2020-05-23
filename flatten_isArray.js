const flatten = (coll) => {
  const result = [];
  for (const item of coll) {
    // Array.isArray — функция-предикат стандартной библиотеки,
    // которая проверяет, является ли значение массивом.
    if (Array.isArray(item)) {
      // Если значение массив, то проходим по всем его элементам
      // Здесь появился вложенный цикл
      for (const subItem of item) {
        // и добавляем их в результирующий массив
        result.push(subItem);
      }
    } else {
      // Если значение не массив, то сразу добавляем его в результирующий массив
      result.push(item);
    }
  }

  return result;
};

// END
const arr = [1, [[2], [3]], [9]]; // [1, [2], [3], 9]
flatten(arr);

//Flatten c помощью оператора spread
/* eslint-disable import/prefer-default-export, default-case, consistent-return */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const flatten = (coll) => {
  const newArr = [];
  for (const item of coll) {
    const checkArr = Array.isArray(item);
    if (checkArr) {
      newArr.push(...item);
    } else { 
      newArr.push(item);
    }
  }
  return newArr;
};
// END

// Еще вариант решения
// BEGIN
export const flatten = (coll) => {
  let result = [];
  for (const item of coll) {
    if (Array.isArray(item)) {
      result = [...result, ...item];
    } else {
      result.push(item);
    }
  }

  return result;
};
// END
