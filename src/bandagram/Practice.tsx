import {Bandagram} from "./bandagram";
import React, { useState} from "react";
import {bandNames} from "./data/properlengthbands";

export const Practice = () => {
  const [answer, setAnswer] = useState(bandNames[Math.floor(Math.random() * bandNames.length)])
  const [guesses, setGuesses] = useState<string[]>([])
  const onMakeGuess = (guess: string) => {
    setGuesses([...guesses, guess]);
  };
  const playAgain = () => {
    setAnswer(bandNames[Math.floor(Math.random() * bandNames.length)]);
    setGuesses([]);
  }
  //TODO allow user to select number of missing letters and fake letters
  return (
    <Bandagram
      correctAnswer={answer}
      initMissingLetters={2}
      initFakeLetters={2}
      random={Math.random}
      guesses={guesses}
      onMakeGuess={onMakeGuess}
      playAgain={playAgain}
    />
  );
}