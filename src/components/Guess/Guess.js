import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ Guesses }) {
  return (
    <>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((x, i) => (
        <p key={i} className="guess">
          {range(0, 5).map((y, j) => (
            <span key={j} className="cell">
              {Guesses[i]?.charAt(j)}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

export default Guess;
