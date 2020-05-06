/*
Реализуйте и экспортируйте по умолчанию функцию get, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:

Массив
Индекс
Значение по умолчанию (равно null)
Примеры
const cities = ['moscow', 'london', 'berlin', 'porto'];

get(cities, 1); // london
get(cities, 4); // null
get(cities, 10, 'paris'); // paris
*/

// BEGIN (write your solution here)
const get = (arr, index, value = null) => {
	const notInArr = index < 0 || index >= arr.length;
	const notEmptyValue = (value === undefined); //false
	const result = (notInArr || notEmptyValue) ? value : arr[index];
  return result;
}
// END
const = ['пять', 'секрет', 'гуталин']
get (arr, 5)
