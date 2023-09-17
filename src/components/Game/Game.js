import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameResultBanner from "../GameResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    const result = checkGuess(guess, answer);
    const winner = result.every((item) => item.status === "correct");
    if (winner) setGameStatus("won");
    else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED)
      setGameStatus("lost");
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={gameStatus !== "playing"}
      />
      <GameResultBanner
        gameStatus={gameStatus}
        numberOfGuesses={guesses.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
