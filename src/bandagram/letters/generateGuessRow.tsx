import {HintLetter} from "./hintLetter";
import React from "react";
import {stringToCharList} from "./stringToCharList";

export interface GuessStatus {
  guessLetter: string;
  correct: boolean;
  wrong: boolean;
}

export function guessStatusOfLetters(guess: string, correctAnswer: string, fakeLetters: string[]): GuessStatus[] {
  const letters = stringToCharList(correctAnswer);
  let remainingLetters: string[] = [...letters, ...fakeLetters];
  return stringToCharList(guess).map((guessLetter, index) => {
    const notWrong = remainingLetters.includes(guessLetter);
    if (notWrong) {
      const index = remainingLetters.findIndex((c) => c === guessLetter)
      remainingLetters.splice(index, 1)
    }
    const guessed = guessLetter === letters[index];
    return { guessLetter, correct: guessed , wrong: !notWrong};
  });
}

/**
 * Generates a row of letters with the correct letters highlighted in green and the letters not included in answer in red.
 *
 * todo: when you use multiple of a letter and a later one is green, the earlier ones should maybe be red?
 * @param guess
 * @param correctAnswer
 * @param fakeLetters
 */
export function generateGuessRow(guess: string, correctAnswer: string, fakeLetters: string[]) {
  return (<>{guessStatusOfLetters(guess, correctAnswer, fakeLetters).map(({guessLetter, correct, wrong}, index) => {
    const backgroundColor = correct ? "green" : wrong ? "red" : undefined;
    return <HintLetter letter={guessLetter} backgroundColor={backgroundColor} key={index} />;
  })}</>);
}
