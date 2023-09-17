import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [Guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuess = {
      value: guess,
      id: crypto.randomUUID(),
    };
    setGuesses([...Guesses, nextGuess]);
  }

  return (
    <>
      <GuessResults Guesses={Guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
