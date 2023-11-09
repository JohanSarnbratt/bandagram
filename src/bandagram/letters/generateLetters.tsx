import {HintLetter} from "./hintLetter";
import React from "react";
import {stringToCharList} from "./stringToCharList";

export function evaluateLetters(input: string, letters: string[]) {
  let remainingLetters: string[] = stringToCharList(input);
  return letters.map(letter => {
    const guessed = remainingLetters.includes(letter);
    if (guessed) {
      const index = remainingLetters.findIndex((c) => c === letter)
      remainingLetters.splice(index, 1)
    }
    return { letter, guessed };
  });
}
export function generateLetters(input: string, letters: string[]) {
  return (<>{evaluateLetters(input, letters).map(({letter, guessed}, index) => {
    return <HintLetter letter={letter} guessed={guessed} key={index} />;
  })}</>);
}