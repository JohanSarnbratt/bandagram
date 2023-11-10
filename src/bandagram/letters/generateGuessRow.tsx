import {HintLetter} from "./hintLetter";
import React from "react";
import {stringToCharList} from "./stringToCharList";

function evaluateLetters(guess: string, letters: string[]) {
  let remainingLetters: string[] = [...letters];
  return stringToCharList(guess).map((guessLetter, index) => {
    const notWrong = remainingLetters.includes(guessLetter);
    const guessed = guessLetter === letters[index];
    return { guessLetter, guessed , wrong: !notWrong};
  });
}
export function generateGuessRow(guess: string, letters: string[]) {
  return (<>{evaluateLetters(guess, letters).map(({guessLetter, guessed, wrong}, index) => {
    return <HintLetter letter={guessLetter} guessed={guessed} wrong={wrong} key={index} />;
  })}</>);
}