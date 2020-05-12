/*
Реализуйте функцию buildDefinitionList, которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.
Пример использования
const definitions = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);
// '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';
*/
const buildDefinitionList = (coll) => {
	let result = [];
  if (coll.length === 0) {
		return '';
	}

  for (const item of coll) {
		let definition = item[0];
		let description = item[1];
		result.push(`<dt>${definition}</dt><dd>${description}</dd>`);

	}
	result = result.join('');
	return result = `<dl>${result}</dl>`;
};


const definitions1 = [
    ['key', 'value'],
    ['key2', 'value2'],
  ];
const definitions2 = [
  ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
  ['Бобр', 'Животное из отряда грызунов'],
];
const  definitions3 = [];
buildDefinitionList(definitions3);
