import React from "react";

function GuessResults({ Guesses }) {
  return (
    <div className="guess-results">
      {Guesses.map(({ value, id }) => (
        <p className="guess" key={id}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
