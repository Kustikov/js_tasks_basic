const bigLettersCount = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
	    if (i === 0 || str[i - 1] === ' ') {
				result += str[i].toUpperCase();
				console.log(result)
			} else {
				result += str[i];
			}
     
  }
 return result;
};
// END

bigLettersCount('р р пв рп в')

/*
solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!
Подсказки
Вычисление длины строки: length(str).
Перевод строки/буквы в верхний регистр: toUpperCase(str).
*/
// BEGIN
/* решение учителя проанализировать
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};
// END