/*
Реализуйте и экспортируйте по умолчанию функцию getIntersectionOfSortedArrays, которая принимает на вход два отсортированных массива и находит их пересечение.

Алгоритм
Поиск пересечения двух неотсортированных массивов — операция, в рамках которой выполняется вложенный цикл с полной проверкой каждого элемента первого массива на вхождение во второй.

Сложность данного алгоритма O(n * m) (произведение n и m), где n и m — размерности массивов. Если массивы отсортированы, то можно реализовать алгоритм, сложность которого уже O(n + m), что значительно лучше.

Суть алгоритма довольно проста. В коде вводятся два указателя (индекса) на каждый из массивов. Начальное значение каждого указателя 0. Затем идёт проверка элементов, находящихся под этими индексами в обоих массивах. Если они совпадают, то значение заносится в результирующий массив, а оба индекса инкрементируются. Если значение в первом массиве больше, чем во втором, то инкрементируется указатель второго массива, иначе — первого.

Примеры
getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]

getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]); // []

getIntersectionOfSortedArrays([], [2]); // []
*/

// BEGIN
const getIntersectionOfSortedArrays = (arr1, arr2) => {
  const size1 = arr1.length;
  const size2 = arr2.length;

  let i1 = 0;
  let i2 = 0;
  const result = [];

  while (i1 < size1 && i2 < size2) {
    if (arr1[i1] === arr2[i2]) {

      result.push(arr1[i1]);
			console.log(arr1[i1]);
      i1 += 1;
      i2 += 1;
    } else if (arr1[i1] > arr2[i2]) {
      i2 += 1;
    } else {
      i1 += 1;
    }
  }

  return result;
};
getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]); // [10, 24]


/* мои решения
const getIntersectionOfSortedArrays = (arr1, arr2) =>{
  const result = [];
	
    for (const item of arr1) {
      const getSameSymbol = arr2.includes(item);
		    if (getSameSymbol) {
          result.push(item);	
		    } 
		}
	  result.length > 0 ? result : [];
		return result;
	};

  getIntersectionOfSortedArrays([2], [2]);




const getIntersectionOfSortedArrays = (coll1, coll2) => {
	let result = [];
  for (let item of coll1) {
    let check1 = item;
		for (let item2 of coll2) {
		  let check2 = item2;	
				if (check1 === check2) {
          result.push(check1);
					console.log(result);
				}	
		}	
	}
	return result;
}
*/
