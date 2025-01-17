type HangmanWordProps = {
  reveal?: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

const HangmanWord = ({
  reveal = false,
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
            key={index}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
