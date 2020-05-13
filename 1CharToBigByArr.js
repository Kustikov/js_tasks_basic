import _ from 'lodash';

const capitalizeWords = (sentence) => {
  const separator = ' ';
  const words = sentence.split(separator);
  // Формируем массив обработанных слов
  const capitalizedWords = [];
  for (const word of words) {
    capitalizedWords.push(_.upperFirst(word));
  }

  // Соединяем обработанные слова обратно в предложение
  return capitalizedWords.join(separator);
};
