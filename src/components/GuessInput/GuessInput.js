import React from "react";

function GuessInput({ handleNewGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setGuess("");
        handleNewGuess({ label: guess, key: crypto.randomUUID() });
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        pattern="^[A-Z]{5}$"
        title={"Must be 5 uppercase letters"}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase().slice(0, 5));
        }}
      />
    </form>
  );
}

export default GuessInput;
