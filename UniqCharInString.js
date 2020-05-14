/*проходим по строке (массиву) итерацией, и пишем посимвольно в новый массив с помощью метода Includes = нет символа пишем, есть - идем дальше. Так как includes отрабатывает как true если символ есть, мы ставим !отрицание в начале чтобы проверял на несуществующие*/
const countUniqChars = (string) => {
	const result = [];
	for (let item of string) {	
	  let checkString = (!result.includes(item));
      if (checkString) {
			  result.push(item);
		  }	
	  }
	  return result.length;
};


const string = '0';
countUniqChars(string);


//второй вариант с вложенным циклом  = решение от 14.05
const countUniqChars = (text) => {
	const result = text.split('');
	const result2 = [];
	console.log(result);
	for (const item of result) {
		for (const char of item) {
			if (!result2.includes(char)) {
				result2.push(char);
				console.log(result2);
			}
		}
		
	}
	return result2.join('').length;
}

const text1 = 'You know nothing Jon Snow';
countUniqChars(text1);

