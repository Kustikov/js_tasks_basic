const getSuperSeriesWinner = (scores) => {
	let result1 = 0;
  let result2 = 0;
	for (const row of scores) {
		console.log(row);
    let canada = row[0];
		let ussr = row[1];
    let isCanada = (canada > ussr);
		let isUssr = (canada < ussr);
		let isEqually = (canada === ussr);
    if (isCanada) {
      result1 += 1;
		} if (isUssr) {
			result2 += 1;
		}
	};
	if (result1 === result2) {
		return null;
	}  
  let result = (result1 > result2) ? 'canada' : 'ussr';
	return result;
}





const scores = [
    [3, 2],
    [4, 1],
    [5, 8],
    [5, 5],
    [2, 2],
    [2, 4],
    [4, 2],
    [2, 3],
 ];

 getSuperSeriesWinner(scores);