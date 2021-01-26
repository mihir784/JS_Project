function extras2016(matches, deliveries){
	const result = {}
	for(let delivery of deliveries){
		const team = delivery.bowling_team
		const extras = parseInt(delivery.extra_runs)
		const match_id = delivery.match_id
		let match_year = 0
		for(let match of matches){
			if(match.id == match_id){
				match_year = match.season
				break
			}
		}
		if(match_year == 2016){
			if(result[team])	result[team] += extras
			else	result[team] = extras
		}
	}
	return result
}

module.exports = extras2016