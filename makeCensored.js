const makeCensored = (sentence, value) => {
	const separator = ' ';
	const censored = '$#%!';
	const words = sentence.split(separator);
  const result = [];
  for (const item of words) {
	  console.log(value.includes(item));
    value.includes(item) ? result.push(censored) : result.push(item);
	}
	return result.join(' ');
}
makeCensored('die chicken? chicken rave', ['die', 'chicken', 'rave']);

/*
Реализуйте и экспортируйте по умолчанию функцию makeCensored, которая заменяет каждое вхождение указанных слов в предложении на последовательность $#%! и возвращает полученную строку. Аргументы:

Текст
Набор стоп слов
Словом считается любая непрерывная последовательность символов, включая любые спецсимволы (без пробелов).import makeCensored from '../strings';

const sentence = 'When you play the game of thrones, you win or you die';
const result = makeCensored(sentence, ['die', 'play']);
// When you $#%! the game of thrones, you win or you $#%!

const sentence2 = 'chicken chicken? chicken! chicken';
const result2 = makeCensored(sentence2, ['?', 'chicken']);
// '$#%! chicken? chicken! $#%!'
*/
