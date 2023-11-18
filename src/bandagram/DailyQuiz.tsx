import {Bandagram} from "./bandagram";
import React, {useMemo} from "react";
import {bandNames} from "./data/dailyquiz";
import {mulberry32} from "./data/mulberryrandom";

export const DailyQuiz = () => {
  const {correctAnswer, random} = useMemo(() => {
    return guessOfTheDay();
  }, []);
  return (
    <Bandagram correctAnswer={correctAnswer} initMissingLetters={2} initFakeLetters={2} random={random}/>
  );
}

function guessOfTheDay() {
  const today = new Date();
  const firstDay = new Date(2023, 10, 18);
  const diff = Math.abs(today.getTime() - firstDay.getTime())/ (1000 * 60 * 60 * 24);
  const index = Math.floor(diff) % bandNames.length;
  const random = mulberry32(index);
  return {correctAnswer: bandNames[index], random};
}