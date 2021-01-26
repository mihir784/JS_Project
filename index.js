const csv = require("csvtojson")
const MATCHES_FILE_PATH = "./csv_data/matches.csv"
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv"
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear")
const matchesWon = require("./ipl/matchesWon")
const extras2016 = require("./ipl/extras2016")
const economicBowlers2015 = require("./ipl/economicBowlers2015")
const story = require("./ipl/story")
const fs = require("fs")
const JSON_OUTPUT_FILE_PATH = "./public/data.json"

function main(){
	csv()
		.fromFile(MATCHES_FILE_PATH)
		.then(matches =>{
			csv()
				.fromFile(DELIVERIES_FILE_PATH)
				.then(deliveries =>{
					let result = {	matchesPlayedPerYear: matchesPlayedPerYear(matches), 
					matchesWon : matchesWon(matches), 
					extras2016: extras2016(matches, deliveries),
					economicBowlers2015: economicBowlers2015(matches, deliveries),
					story: story(deliveries)}
					saveData(result)
				})
		})
}

function saveData(result){
	console.log(result)
	const jsonData = {	matchesPlayedPerYear: result.matchesPlayedPerYear, 
						matchesWon : result.matchesWon,
						extras2016: result.extras2016,
						economicBowlers2015: result.economicBowlers2015,
						story: result.story}

	const jsonString = JSON.stringify(jsonData)
	fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err =>{
		if(err)	console.log(err)
	})
}

main()
