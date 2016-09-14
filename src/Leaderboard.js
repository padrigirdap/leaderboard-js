var gameInfo = function() {
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}


function Team(name) {
  this.name = name;
  this.rank = null;
  this.wins = 0;
  this.loss = 0;
};

var teams = function() {
  aryTeam = [];
  for (var i = 0; i < gameInfo.length; i++) {
    if (!aryTeam.includes(gameInfo[i].home_team)) {
      aryTeam.push(gameInfo[i].home_team);
    }
    if (!aryTeam.includes(gameInfo[i].away_team)) {
      aryTeam.push(gameInfo[i].away_team)
    };
  };
  return aryTeam;
}

var generateTeamObj = function(teamsArray) {
  var teams = [];
  for (var i = 0; i < teamsArray.length; i++) {
    teamObjects.push(new Team(teamsArray[i]));
  }
  return teams;
}


var setRecord = function(teams) {
  for (var i = 0; i < gameInfo().length; i++) {
    if (gameInfo[i].away_score > gameInfo[i].home_team) {
      teams.find(x => x.name === gameInfo[i].away_team).wins += 1;
      teams.find(x => x.name === gameInfo[i].home_team).loss += 1;
    } else if (gameInfo[i].home_score > gameInfo[i].away_score) {
      teams.find(x => x.name === gameInfo[i].away_team).loss += 1;
      teams.find(x => x.name === gameInfo[i].home_team).wins += 1;
    }
  }
};

var rankings = function(teams) {
  teams.sort(function(a, b){
    return a.wins - b.wins;
  });

  for (var i = 0; i < teams.length; i++) {
    teams[i].rank = i + 1;
  }
  return teams;
};

var teamSetup = function() {
  var list = teams;
  var teamObj = generateTeamObj(list);
  setRecord(teamObj);
  rankings(teamObj);
  return teamObj;
};


var summary = function() {
  var finalObj = teamSetup();

  var leaderBoardOutline = "<table border='1px'><thead><tr><th>Name</th><th>Rank</th><th>Total Wins</th><th>Total Losses</th></tr></thead><tbody>";

  for (var i = 0; i < finalObj.length; i++) {
    leaderBoardOutline += "<tr><td>" + finalObj[i].name + "</td><td>" + finalObj[i].rank + "</td><td>" + finalObj[i].wins + "</td><td>" + finalObj[i].loss + "</td></tr>";};

    leaderBoardOutline += "</tbody></table>"

    return leaderBoardOutline;
  };

document.write(summary());
