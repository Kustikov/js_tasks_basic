const calculateSum = (coll) => {
	let summ = 0;
	  if (coll.length === 0) {
		return null;
}
	for (let i = 0; i < coll.length; i += 1) {
  let isForThreeDevide = (coll[i] % 3 === 0)
  console.log(isForThreeDevide);
	  if (isForThreeDevide === true) {
	  summ += coll[i];
	}	
}
return summ;
}

const coll = [];
calculateSum(coll);


/*
Реализуйте и экспортируйте по умолчанию функцию calculateSum, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).
*/