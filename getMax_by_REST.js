//Найти MAX значение массива с помощью оператора REST и деструктуризации
//Мое решение
// BEGIN (write your solution here)
export const getMax = (arr) => {
  const length = arr.length;
  if (length === 0) {
    return null;
  }
  const [first, ...slice] = arr;
  for (const item of slice) {
    if (first < item) {
      return item;
    } 
 	}
  return first;	
};
// END

//Другой вариарт решения
// BEGIN
export const getMax = (coll) => {
  if (coll.length === 0) {
    return null;
  }

  let [max, ...rest] = coll;
  for (const value of rest) {
    if (value > max) {
      max = value;
    }
  }

  return max;
};
// END


