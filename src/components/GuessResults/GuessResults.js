import React from "react";

function GuessResults({ Guesses }) {
  return (
    <div className="guess-results">
      {Guesses.map(({ label, key }) => (
        <p className="guess" key={key}>
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
