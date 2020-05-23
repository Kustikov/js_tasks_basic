/* eslint-disable import/prefer-default-export */
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;
  return Math.sqrt(xs ** 2 + ys ** 2); 
};
// BEGIN (write your solution here)
export const getTheNearestLocation = (locations, currentPoint) => {
  if (locations.length === 0) {
    return null;
  }
  const result = [];
  for (let i = 0; i < locations.length; i += 1) {
    const item = locations[i];
    const [, [x1, y1]] = item;
    const endLocation = [x1, y1];
    result.push(getDistance(endLocation, currentPoint));
  }
  const minCount = result.indexOf(Math.min(...result));
  return locations[minCount]; 
};
// END


/*
На многих картах, например google maps, реализован поиск мест находящихся рядом с выбранной точкой, например текущим расположением. В этом задании мы реализуем подобную задачу в очень упрощенном варианте.

location.js
Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит место ближайшее к указанной точке на карте и возвращает его. Параметры функции:

locations – массив мест на карте. Каждое место это массив из двух элементов, где первый элемент это название места, второй – точка на карте (массив из двух чисел x и y).
point – текущая точка на карте. Массив из двух элементов-координат x и y.
import { getTheNearestLocation } from '../location.js';

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если точек нет, то возвращается null
getTheNearestLocation([], currentPoint); // null

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
Для решения этой задачи деструктуризация не нужна, но мы хотим его потренировать. Поэтому решите эту задачу без обращения к индексам массивов.

Подсказки
Расстояние между точками высчитывается с помощью функции getDistance.
*/
