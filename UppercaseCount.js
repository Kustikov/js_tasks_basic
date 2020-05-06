//Вычесление кол-ва заглваных символов строки
const bigLettersCount = (str) => {
    // BEGIN (write your solution here)
    let newStr = str.toUpperCase();
    let index = 0;
    let result = '';
    while (index < str.length) {
        let currentChar = newStr[index];
        let lastChar = str[index];

        if (currentChar === lastChar) {
            result = `${result}${currentChar}`;
        };
        index += 1;

    };
    return result.length;
};

bigLettersCount('Привет')