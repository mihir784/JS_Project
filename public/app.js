function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData)
}

function visualizeData(data){
    visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear)
    visualizeMatchesWon(data.matchesWon)
    visualizeExtras2016(data.extras2016)
    visualizeEconomicBowlers2015(data.economicBowlers2015)
    visualizeStory(data.story)
    return
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear){
    const seriesData = []
    for(let year in matchesPlayedPerYear){
        seriesData.push([year, matchesPlayedPerYear[year]])
    }

    Highcharts.chart("matches-played-per-year",{
        chart: {
          type: "column"
        },
        title: {
          text: "Matches Played Per Year"
        },
        subtitle: {
          text:'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          min: 0,
          title: {
            text: "Matches"
          }
        },
        series: [
          {
            name: "Years",
            data: seriesData
          }
        ]
    })
}

function visualizeMatchesWon(matchesWon){
    const winData = []
    for(let team in matchesWon){
        winData.push({name: team, data: [matchesWon[team]]})
    }
    console.log(winData)
    Highcharts.chart("number-of-matches-won",{
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Matches Won by each Team in IPL'
        },
        subtitle: {
            text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
            categories: ['Team'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' wins in IPL'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            }
        },
        credits: {
            enabled: false
        },
        series: winData
    })
}

function visualizeExtras2016(extras){
    const extrasData = []
    for(let team in extras){
        extrasData.push([team, extras[team]])
    }

    Highcharts.chart("extras-by-teams-in-2016",{
        chart: {
          type: "column"
        },
        title: {
          text: "Extras by Teams in 2016"
        },
        subtitle: {
          text:
            'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
          type: "category"
        },
        yAxis: {
          min: 0,
          title: {
            text: "Extras"
          }
        },
        tooltip: {
            pointFormat: 'Extras in 2016: <b>{point.y:f} </b>'
        },
        series: [
          {
            name: "Teams",
            data: extrasData
          }
        ]
    })
}

function visualizeEconomicBowlers2015(data){
    const bowlersData = []
    for(let bowler in data){
        bowlersData.push([bowler, data[bowler]])
    }

    Highcharts.chart("economic-bowlers-2015",{
        chart: {
          type: "column"
        },
        title: {
            text: "Top 10 Economic Bowlers in 2015"
        },
        subtitle: {
            text:'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Economy'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Economy in 2015: <b>{point.y:.2f} </b>'
        },
        series: [{
            name: 'Economy',
            data: bowlersData,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.2f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
            }
        }
        }]
    })
}

function visualizeStory(teams){
    const teamsData = []
    for(let team in teams){
        teamsData.push({name: team, data: [teams[team]["sixes"], teams[team]["fours"], teams[team]["wickets"]]})
    }
    Highcharts.chart('story-time', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Story : Sixes, Fours and Wickets by Each Team'
        },
        xAxis: {
            categories: ['Sixes', 'Fours', 'Wickets']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: teamsData
    })
}

fetchAndVisualizeData()