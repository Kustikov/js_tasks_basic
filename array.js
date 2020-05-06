/* eslint-disable no-param-reassign */
// BEGIN (write your solution here)
const swap = (array, index) => {
  const arr = array;
  const smallIndex = index - 1;
  const moreIndex  = index + 1;
   if (array[smallIndex] === undefined || array[moreIndex] === undefined) {
    console.log(array);
    return array;
   } if (index === 0) {
      return array;
    } 
		
		const mirrorIndex = array[smallIndex];
    const temp = array[moreIndex];
    arr[smallIndex] = temp;
    arr[moreIndex] = mirrorIndex;
    return arr;
   // }
};

// END

const array = ['1', '2', '3', '4'];
swap(array, 2)