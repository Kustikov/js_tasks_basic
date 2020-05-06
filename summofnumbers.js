
// BEGIN (write your solution here)
const addDigits = (num) => {
    const newNum = num.toString();
    console.log('Это длина строки ' + newNum.length);
    let result = 0;
    for (let i = 0; i < newNum.length; i++) {
			
        result += Number(newNum[i]);
    }
    return result;
    console.log(result);
}
// END
addDigits(12); 