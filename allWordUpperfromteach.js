const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();
// BEGIN
const solution = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i++) {
		console.log(i);
    const shouldBeBig = (i === 0 || str[i-1] === ' ');//константана "должна бытб больщой" при i строго равном 0 или к итерации в строке отнимаем один по строке и проверяем пробел это или нет
		if (shouldBeBig === true) {
			result += toUpperCase(str[i]);
		} else {			
			result += str[i];
		};
		};
		return result;
  };
// END