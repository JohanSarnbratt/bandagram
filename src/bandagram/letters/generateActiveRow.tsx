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
export function generateActiveRow(input: string, letters: string[], onLetterClick: (letter: string) => void) {
  return (<>{evaluateLetters(input, letters).map(({letter, guessed}, index) => {
    const backgroundColor = guessed ? "orange" :  undefined;
    return <HintLetter letter={letter} backgroundColor={backgroundColor} key={index} onClick={() => onLetterClick(letter)} />;
  })}</>);
}