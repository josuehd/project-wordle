import React from "react";
import Guess from "../Guess";

function GuessResults({ Guesses }) {
  return (
    <div className="guess-results">
      <Guess Guesses={Guesses} />
    </div>
  );
}

export default GuessResults;
