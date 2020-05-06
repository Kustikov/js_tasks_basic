const dnaToRna = (string) => {
	let result = '';
	for (let i = 0; i < string.length; i += 1) {
		if (string[i] !== 'G' && string[i] !== 'C' && string[i] !== 'T' && string[i] !== 'A') {
		result = null;
		} if (string[i] === 'G') {
		result += 'C'
		} else if (string[i] === 'C') {
		result += 'G';
		} else if (string[i] === 'T') {
		result += 'A'
		} else if (string[i] === 'A') {
		result += 'U'
		} else if (string = '') {
			result = '';
		}
	}
	return result;
}
dnaToRna ('ggggGCTA')


/*
ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).

Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

G -> C
C -> G
T -> A
A -> U
dnaToRna.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
Подсказки
Длина строки str находится так: str.length
*/