const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

async function main() {
  const teamCount = 3;
  const playersCount = 4;
  const teamResults = [];

  let maxTeamNumber = 0;
  let winnerNumber = 0;
  let maxResult = 0;

  for (let teamNumber = 1; teamNumber < teamCount + 1; teamNumber++) {
    const teamResult = [];
    let maxForPlayer = 0;
    let maxPlayerNumber = 0;

    for (
      let playerNumber = 1;
      playerNumber < playersCount + 1;
      playerNumber++
    ) {
      const input = await ask(
        `Enter ${teamNumber} team ${playerNumber} player result: `
      );
      const playerScore = input.split(" ");
      const playerSum = playerScore.reduce(
        (sum, score) => Number(score) + sum,
        0
      );

      if (playerSum > maxForPlayer) {
        maxForPlayer = playerSum;
        maxPlayerNumber = playerNumber;
      }
    }

    console.log(
      `Team ${teamNumber}. The winner is the player ${maxPlayerNumber} with the score of ${maxForPlayer}`
    );

    if (maxForPlayer > maxResult) {
      maxTeamNumber = teamNumber;
      winnerNumber = maxPlayerNumber;
      maxResult = maxForPlayer;
    }
  }

  console.log(
    `The best result was shown by player ${winnerNumber} of the team ${maxTeamNumber} with the score of ${maxResult}`
  );
  rl.close();
}

main();
