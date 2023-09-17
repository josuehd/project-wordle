import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        setTentativeGuess("");
        handleSubmitGuess(tentativeGuess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        pattern="^[A-Z]{5}$"
        title={"Must be 5 uppercase letters"}
        onChange={(e) => {
          setTentativeGuess(e.target.value.toUpperCase().slice(0, 5));
        }}
      />
    </form>
  );
}

export default GuessInput;
