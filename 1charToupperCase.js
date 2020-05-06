import _ from 'lodash';

const capitalizeWords = (sentence) => {
  // определяем разделитель — пробел
  const separator = ' ';
  const words = sentence.split(separator);
  const capitalizedWords = [];
  for (const word of words) {
    // Функция _.upperFirst() приводит первый символ слова к верхнему регистру,
    // Мы подключили библиотеку Lodash, чтобы воспользоваться этой функцией.
    capitalizedWords.push(_.upperFirst(word));
  }

  return capitalizedWords.join(separator);
};


import _ from 'lodash';

const capitalizeWords = (sentence) => {
  // определяем разделитель — пробел
  const separator = ' ';
  const words = sentence.split(separator);
  const capitalizedWords = [];
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    // Функция _.upperFirst() приводит первый символ слова
    // к верхнему регистру,
    // Мы подключили библиотеку Lodash, чтобы воспользоваться этой функцией.
    capitalizedWords[index] = _.upperFirst(word);
  }
  return capitalizedWords.join(separator);
};

console.log(capitalizeWords('hello from malasia'));
// Hello From Malasia