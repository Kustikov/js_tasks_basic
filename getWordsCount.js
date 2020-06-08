/*Напишем функцию, считающую количество вхождений каждого слова в предложение. Результатом работы этой функции является объект, в котором ключ — "слово", а значение — "количество вхождений". Пример:
*/
const content = 'cat dog cat eye see cat dog';

/*
Логика работы функции выглядит так:

Разбиваем строку на слова
Обходим массив слов и добавляем их в результат
Если слово добавляется первый раз, то ставим в значение цифру 1
Если слово уже было внутри результата, то текущее значение увеличиваем на 1
*/
import _ from 'lodash';

const getWordsCount = (content) => {
  // Разбиваем на слова
  const words = content.split(' ');
  const result = {};

  for (const word of words) {
    if (!_.has(result, word)) {
      // Инициализация при первом упоминании
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }

  return result;
};


const result = getWordsCount(content);
// {
//     cat: 3,
//     dog: 2,
//     eye: 1,
//     see: 1,
// };

