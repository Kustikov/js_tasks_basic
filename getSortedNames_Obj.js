/*
objects.js
Реализуйте и экспортируйте по умолчанию функцию getSortedNames, которая принимает на вход список пользователей, извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен.

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
*/
//Мое решение
const getSortedNames = (users) => {
	const result = [];
  for (const item of users) {
		const names = item.name;
		result.push(names);
}
return result.sort();
}
//Решение через деструктцризацию
// BEGIN
const getSortedNames = (users) => {
  const names = [];

  for (const { name } of users) {
    names.push(name);
  }

  return names.sort();
};
// END
const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
