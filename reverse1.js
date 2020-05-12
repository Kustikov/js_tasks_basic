const reverse = (coll) => {
	const length = coll.length;
	for (let i = 0; i < length / 2; i += 1) {
		const mirrorIndex = (length - 1) - i;
		const temp = coll[i];
		coll[i] = coll[mirrorIndex];
		coll[mirrorIndex] = temp;
	}
	console.log(coll);
	return coll;
}

reverse([0, 5, 7, 8])
