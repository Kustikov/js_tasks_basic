/*
strings.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет является ли эта строка сбалансированной. Пустая строка (отсутствие скобок) считается сбалансированной.

import isBracketStructureBalanced from './strings.js';

// Пример вложенности
isBracketStructureBalanced('[()]');  // true
isBracketStructureBalanced('{<>}}'); // false
Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.

Подсказки
Решение учителя использует метод indexOf
*/
  

const openingSymbols = ['(', '[', '{', '<'];
  const closingSymbols = [')', ']', '}', '>'];
// BEGIN
const isBracketStructureBalanced = (str) => {
  const stack = [];
  for (const symbol of str) {
    if (openingSymbols.includes(symbol)) {
      const closingSymbol = closingSymbols[openingSymbols.indexOf(symbol)];
			console.log(openingSymbols.indexOf(symbol));
      stack.push(closingSymbol);
			console.log(stack)
    } else {
      const lastSavedSymbol = stack.pop();
			console.log(lastSavedSymbol)
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }
 
  return stack.length === 0;
};
// END

  
	
  const str6 = '([)]';
  isBracketStructureBalanced(str1)
 
 /*1) Первая итерация If - true
В константу closingSymbol записали [0] символ из ранее созданной константы closingSymbols ')' (метод indexOf возвращает искомый индекс если такой символ имеется в указанном массиве )
Добавили в stack
stack = [')']stack = [')'];
2) Вторая итерация If - true
В константу closingSymbol записали [1] символ из ранее созданной константы closingSymbols ']'
Добавили в stack
stack = [')', ']'];
3) Третья итерация, сработал else (т к текущий символ ')')
Взяли последний ранее добавленный символ из stack ']'  и записали его в константу lastSavedSymbol
Проверяем внутренним условием if текущий символ на 'Не равно" c lastSavedSymbol
(')' !== ']') - это true
Поэтому вернули false

последовательность скобок проверяем путём сравнения с помощью метола indexOf!!!!!!!!!! и массива обявленного сверху

*/
