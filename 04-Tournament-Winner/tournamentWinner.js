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
    const [homeTeam, awayTeam] = competition[i];

    const roundWinner = results[i] === 1 ? homeTeam : awayTeam;
    updateScore(roundWinner, scores);

    if (scores[roundWinner] > scores[winner]) {
      winner = roundWinner;
    }
  }

  return winner;
};

const updateScore = (team, scoreCard) => {
  if (!scoreCard[team]) {
    scoreCard[team] = 0;
  }
  scoreCard[team] += 3;
};

const result = tournamentWinner(competitions, results);
console.log(result);
