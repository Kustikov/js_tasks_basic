// BEGIN (write your solution here)
const toUpChar = (string) => {
  let newString = string.toUpperCase();
  let result = '';
    for (let i = 0; i < newString.length; i++) {
      let currentString = newString[i];
      let oldString = string[i];
			i += i;
			if (currentString === oldString) {
			result = `${result}${currentString}`;
		} else if (currentString !== oldString ) {
			result = `${result}${currentString}`;
		} 	
    };
		return `${result[0]}${string.substr(1)} `;
};

const separator = (string) => {
	string = string.replace(/ +/g, ' ').trim();
	let result = string.split(" ");
	console.log(result)
	return result;
};
const solution = (string)=> {
	string = separator(string);
	console.log(string.length);
	let result = '';
	for (let i = 0; i < string.length; i++) {
	result += toUpChar(string[i]);		
	}; 
	const endResult = result.split(' ');
	const endResult1 = endResult.slice(0, -1);
	return endResult1.join(' ');
};
// END

solution('голос, демон пьянка')
