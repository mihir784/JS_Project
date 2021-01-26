function matchesWon(matches){
	const result = {}
	for(let match of matches){
		const winner = match.winner ? match.winner : "No Result"
		if(result[winner])	result[winner] += 1
		else	result[winner] = 1
	}
	return result
}

module.exports = matchesWon