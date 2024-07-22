// round competition, mane prottek team prottek team er shathe khelbe
// je team nested array er shuru te sheta home team
// result array er er moddhe 0 mane away team jitse ar 1 mane home team jites

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results = [0, 0, 1];

// Solution | O(n) Time | O(k) Space

const tournamentWinner = (competition, results) => {
  const scores = { "": 0 };
  let winner = "";

  for (let i = 0; i < competition.length; i++) {
    if (results[i] == 0) {
      const awayTeam = competition[i][1];
      if (scores[awayTeam]) {
        scores[awayTeam] += 3;
      } else {
        scores[awayTeam] = 3;
      }

      if (scores[awayTeam] > scores[winner]) {
        winner = awayTeam;
      }
    } else {
      const homeTeam = competition[i][0];
      if (scores[homeTeam]) {
        scores[homeTeam] += 3;
      } else {
        scores[homeTeam] = 3;
      }
      if (scores[homeTeam] > scores[winner]) {
        winner = homeTeam;
      }
    }
  }

  return winner;
};

const result = tournamentWinner(competitions, results);
console.log(result);
