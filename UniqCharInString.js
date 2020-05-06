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


/*проходим по строке (массиву) итерацией, и пишем посимвольно в новый массив с помощью метода Includes = нет символа пишем, есть - идем дальше. Так как includes отрабатывает как true если символ есть, мы ставим !отрицание в начале чтобы проверял на несуществующие