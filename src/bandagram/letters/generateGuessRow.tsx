import {HintLetter} from "./hintLetter";
import React from "react";
import {stringToCharList} from "./stringToCharList";

function evaluateLetters(guess: string, correctAnswer: string, fakeLetters: string[]) {
  const letters = stringToCharList(correctAnswer);
  let remainingLetters: string[] = [...letters, ...fakeLetters];
  return stringToCharList(guess).map((guessLetter, index) => {
    const notWrong = remainingLetters.includes(guessLetter);
    if (notWrong) {
      const index = remainingLetters.findIndex((c) => c === guessLetter)
      remainingLetters.splice(index, 1)
    }
    const guessed = guessLetter === letters[index];
    return { guessLetter, guessed , wrong: !notWrong};
  });
}

/**
 * Generates a row of letters with the correct letters highlighted in green and the letters not included in answer in red.
 *
 * todo: when you use multiple of a letter and a later one is green, the earlier ones should maybe be red?
 * @param guess
 * @param correctAnswer
 */
export function generateGuessRow(guess: string, correctAnswer: string, fakeLetters: string[]) {
  return (<>{evaluateLetters(guess, correctAnswer, fakeLetters).map(({guessLetter, guessed, wrong}, index) => {
    const backgroundColor = guessed ? "green" : wrong ? "red" : undefined;
    return <HintLetter letter={guessLetter} backgroundColor={backgroundColor} key={index} />;
  })}</>);
}