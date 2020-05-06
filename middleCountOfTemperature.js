// BEGIN (write your solution here)
const temperatures = (coll) => {
	;
  if (coll.length === 0) {
		return null
	}
	let sum = 0;
	for (const numbers of coll) {
		sum += numbers;
		console.log(sum)
	}

	return sum / coll.length - 1;
}
// END
const coll = [1, 2, 5];
temperatures(coll);

