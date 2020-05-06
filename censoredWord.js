const makeCensored = (sentence, stopArr) => {
	const separate = ' ';
	const words = sentence.split(separate);
	console.log(words);
	const newArr = [];
	let result = '';

	for (let word of words) {
		
		let isCheck = (word === stopArr[0] || word === stopArr[1]);
		if (isCheck) {
			newArr.push('$#%!')
		} else {
			newArr.push(word);
		}
}
console.log(newArr);
result = newArr.join(' ');
return result;
}

const sentance = 'Привет, димон где твой пистон ?';
const stopArr = ['димон', 'твой']
makeCensored(sentance, stopArr);

//Решеине учителя
// BEGIN
const makeCensored = (text, stopWords) => {
  const words = text.split(' ');

  const result = [];
  for (const word of words) {
    const newWord = stopWords.includes(word) ? '$#%!' : word;
    result.push(newWord);
  }

  return result.join(' ');
};

export default makeCensored;
// END


/*
strings.js
Реализуйте и экспортируйте по умолчанию функцию makeCensored, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. Аргументы:

Текст
Набор стоп слов
Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).
*/
