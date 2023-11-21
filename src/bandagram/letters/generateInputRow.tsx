import {HintLetter} from "./hintLetter";
import React from "react";
import {stringToCharList} from "./stringToCharList";

export function generateInputRow(input: string) {
  return (<>{stringToCharList(input).map((letter, index) => {
    return <HintLetter letter={letter}  key={index} />;
  })}</>);
}