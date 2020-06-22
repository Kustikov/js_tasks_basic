/*
objects.js
Реализуйте функцию pick, которая извлекает из переданного объекта все элементы по указанным ключам и возвращает новый объект. Аргументы:

Исходный объект
Массив ключей, по которому необходимо выбирать элементы (ключ и значение) из исходного объекта, и на основе выбранных данных сформировать новый объект
Экспортируйте функцию по умолчанию.

Примеры
const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']);       // { user: 'ubuntu' }
pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
pick(data, []);             // {}
pick(data, ['none']);       // {}
*/
// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
//Мое решение
// BEGIN (write your solution here)
const pick = (data, key) => {
  const arr = [];
  const result = {};
  const entries = Object.entries(data);
  for (const [keys, value] of entries) {
	    for (const item of key) {
		  const check = (keys === item);
		    if (check) {
			  arr.push(value);
		  }		
	  }	
  }
  if (Object.keys(data).length === arr.length) {
    return data;
  }
  for(let i = 0; i < arr.length; i += 1) {
    result[key[i]] = arr[i];
  }
  return result;
};
// END
export default pick;

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const pick = (data, key) => {
  const arr = [];
  const result = {};
  const entries = Object.entries(data);
  for (const [keys, value] of entries) {
	    for (const item of key) {
		  const check = (keys === item);
		    if (check) {
			  arr.push(value);
		  }		
	  }	
  }
  if (Object.keys(data).length === arr.length) {
    return data;
  }
  for(let i = 0; i < arr.length; i += 1) {
    result[key[i]] = arr[i];
  }
  return result;
};
// END
export default pick;

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const pick = (data, key) => {
  const arr = [];
  const result = {};
  const entries = Object.entries(data);
  for (const [keys, value] of entries) {
	    for (const item of key) {
		  const check = (keys === item);
		    if (check) {
			  arr.push(value);
		  }		
	  }	
  }
  if (Object.keys(data).length === arr.length) {
    return data;
  }
  for(let i = 0; i < arr.length; i += 1) {
    result[key[i]] = arr[i];
  }
  return result;
};
// END
export default pick;


// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const pick = (data, key) => {
  const arr = [];
  const result = {};
  const entries = Object.entries(data);
  for (const [keys, value] of entries) {
	    for (const item of key) {
		  const check = (keys === item);
		    if (check) {
			  arr.push(value);
		  }		
	  }	
  }
  if (Object.keys(data).length === arr.length) {
    return data;
  }
  for(let i = 0; i < arr.length; i += 1) {
    result[key[i]] = arr[i];
  }
  return result;
};
// END
export default pick;

//мое второе решение
// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const pick = (data, arr) => {
	let result = {};
	const values = Object.entries(data);
	for (const [key, value] of values) {
		for (const item of arr) {
				if (item.includes(key)){
				console.log(value);	
				result[key] = value;
		   }
		}
  }
  return result;
};
export default pick;
//

//решение учителя
// BEGIN
export default (data, keys) => {
  const result = {};
  const dataKeys = Object.keys(data);

  for (const key of keys) {
    if (dataKeys.includes(key)) {
      result[key] = data[key];
    }
  }

  return result;
};
// END


