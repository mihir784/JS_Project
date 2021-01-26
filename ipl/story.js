function story(deliveries){
	const result = {}
	for(let delivery of deliveries){
		const runs = parseInt(delivery.batsman_runs)
		const dismissed = delivery.player_dismissed
		const batting_team = delivery.batting_team
		const bowling_team = delivery.bowling_team
		if(!result[batting_team])	result[batting_team] = {}
		if(!result[bowling_team])	result[bowling_team] = {}
		if(runs === 6){
			if(result[batting_team]["sixes"]){
				result[batting_team]["sixes"] += 1
			} else {
				result[batting_team]["sixes"] = 1
			}
		} else if(runs === 4){
			if(result[batting_team]["fours"]){
				result[batting_team]["fours"] += 1
			} else {
				result[batting_team]["fours"] = 1
			}
		} else if(dismissed != ""){
			if(result[batting_team]["wickets"]){
				result[batting_team]["wickets"] += 1
			} else {
				result[batting_team]["wickets"] = 1
			}
		}
	}
	return result
}

module.exports = story