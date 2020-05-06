/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const buildDefinitionList = (definitions) => {
	
let listColl  = [];
let result = '';
let result2 = '';
  if (definitions.length === 0) {
    return result2;
  } if (definitions.length > 0) {
      for (let item of definitions) {
        listColl.push(`<dt>${item[0]}</dt><dd>${item[1]}</dd>`) 
      }
      result = listColl.join('');
	    result = `<dl>${result}</dl>`
	    return result;
    }
}
// END
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

	buildDefinitionList(definitions)

	/*
	Реализуйте функцию buildDefinitionList, которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

Параметры функции
Список определений следующего формата:

 const definitions = [
  ['definition1', 'description1'],
  ['definition2', 'description2']
];
То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.
*/