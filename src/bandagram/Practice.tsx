import {Bandagram} from "./bandagram";
import React, {useMemo} from "react";
import {bandNames} from "./data/properlengthbands";

export const Practice = () => {
  const correctAnswer = useMemo(() => {
    return bandNames[Math.floor(Math.random() * bandNames.length)];
  }, []);
  //TODO allow user to select number of missing letters and fake letters
  return (
    <Bandagram correctAnswer={correctAnswer} initMissingLetters={2} initFakeLetters={2}/>
  );
}