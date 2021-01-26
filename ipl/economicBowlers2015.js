function economicBowlers2015(matches, deliveries){
	const result = {}
	for(let delivery of deliveries){
		const bowler = delivery.bowler
		if(!result[bowler])	result[bowler] = {name: bowler}
		const runs = parseInt(delivery.total_runs)
		const match_id = delivery.match_id
		let match_year = 0
		for(let match of matches){
			if(match.id == match_id){
				match_year = match.season
				break
			}
		}
		if(match_year == 2015){
			if(result[bowler]["runs"]){
				result[bowler]["runs"] += runs
			} else {
				result[bowler]["runs"] = runs
			}
			if(result[bowler]["balls"])	result[bowler]["balls"] += 1
			else	result[bowler]["balls"] = 1
		}
	}
	let arrayResult = []
	for(bowler in result){
		let overs = Math.floor(result[bowler]["balls"] / 6)
		result[bowler]["economy"] = result[bowler]["runs"] / overs

		arrayResult.push([result[bowler]["name"], (result[bowler]["economy"]) ? result[bowler]["economy"] : Infinity, 
		result[bowler]["runs"], overs])
		delete result[bowler]
	}
	arrayResult.sort((a, b) =>{
		return a[1]-b[1]
	})
	for(let i = 0; i < 10; i++){
		result[arrayResult[i][0]] = arrayResult[i][1]
	}
	return result
}

module.exports = economicBowlers2015