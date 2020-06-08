//Обход свойст объекта
/*В JavaScript для обхода объектов есть несколько способов. Самый простой – использовать конструкцию for..in, которая очень похожа на обычный цикл. (нежелателен)

const course = { name: 'JS: React', slug: 'js-react' };
for (const prop in course) {
  console.log(`course.${prop} = ${course[prop]}`);
}
// course.name = JS: React
// course.slug = js-react
*/

//1)Для получения ключей свойство Object.keys()
const course = { name: 'JS: React', slug: 'js-react' };

const keys = Object.keys(course); // [ 'name', 'slug' ]

for (const key of keys) {
  console.log(course[key]);
}


//2)Можно сразу получить массив значений свойств объекта. Это делает метод Object.values(obj):
const course1 = { name: 'JS: React', slug: 'js-react' };

const values1 = Object.values(course1); // [ 'JS: React', 'js-react' ]

for (const value of values1) {
  console.log(value);
}
//3)Ну, и последний вариант, метод, который возвращает сразу ключи и значения объекта. То есть каждый элемент сам будет массивом, содержащим ключ и соответствующее ему значение — [ key, value ]. За это отвечает метод Object.entries(obj):
const course2 = { name: 'JS: React', slug: 'js-react' };

const entries = Object.entries(course2);
// [[ 'name', 'JS: React' ], [ 'slug', 'js-react' ]]
for (const [key, value] of entries) {
  console.log(key + ' это метод Object.entries(obj)');
  console.log(value + ' это метод Object.entries(obj)');
}


//Рассмотрим пример. Реализуем функцию findKeys, которая возвращает список ключей объекта, значение которых равно переданному значению:



/*Логика работы функции выглядит так:

Обходим свойства объекта
Если значение в свойстве совпадает с переданным, то добавляем ключ в результат
*/
const findKeys = (obj, expectedValue) => {
  const result = [];

  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    if (value === expectedValue) {
      result.push(key);
    }
  }

  return result;
};

const obj = {
  syntax: 3,
  using: 2,
  foreach: 10,
  operations: 10,
  destructuring: 2,
  array: 2,
};

findKeys(obj, 10); // ['foreach', 'operations']

//End
