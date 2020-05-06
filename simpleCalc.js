const calc = (operator, a, b) => {
	let result;
	switch (operator) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '/':
			result = a / b;
			break;
		case '*':
			result = a * b;
			break
		default: 
			result = NaN;
	}
	return result;
} 
calc ('%', 2, 3);