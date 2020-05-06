// BEGIN (write your solution here)
const swap = (coll) => {
	const temp = coll[0];
	const result = [];
	if (coll.length === 0) {
		return [];
	} else if (coll.length === 2) {
		coll[0] = coll[1];
		delete coll[1];
		coll[1] = temp;
		console.log(coll)
	} else if (coll.length === 3) {
		coll[0] = coll[2];
		delete coll[2];
		coll[2] = temp;
		console.log(coll);
	}
  return coll;	
}
const coll = []
swap(coll);