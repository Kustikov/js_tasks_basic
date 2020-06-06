/*objects.js
Реализуйте и экспортируйте по умолчанию функцию getIn, которая извлекает из объекта (который может быть любой глубины вложенности) значение по указанным ключам. Аргументы:

Исходный объект
Цепочка ключей (массив), по которой ведётся поиск значения
В случае, когда добраться до значения невозможно, возвращается null.

Примеры
const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

getIn(data, ['undefined']); // null
getIn(data, ['user']); // 'ubuntu'
getIn(data, ['user', 'ubuntu']); // null
getIn(data, ['hosts', 1, 'name']); // 'web2'
getIn(data, ['hosts', 0]); // { name: 'web1' }
getIn(data, ['hosts', 1, null]); // 3
getIn(data, ['hosts', 1, 'active']); // false
*/

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
import { has } from 'lodash';
// BEGIN 
const getIn = (data, keys) => {
  let result = data;
  for (const item of keys) {
    if (has(result, item)) {
      result = result[item];
    } else {
        return null;
    }
  }
  return result;
};
// END
