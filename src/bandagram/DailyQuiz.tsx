import {Bandagram} from "./bandagram";
import React, {useMemo, useState} from "react";
import {bandNames} from "./data/dailyquiz";
import {mulberry32} from "./data/mulberryrandom";
import Cookies from "universal-cookie";
import {DailyState} from "./cookie/cookie";

export const DailyQuiz = () => {
  const {correctAnswer, random} = useMemo(() => {
    return answerOfTheDay();
  }, []);
  const cookies = new Cookies('dailyState', { path: '/' });
  const [blob, setBlob] = useState(true);
  const guesses = guessesOfTheDay(cookies);
  const onMakeGuess = (guess: string) => {
    cookies.set('dailyState', {...cookies.get('dailyState'), guesses: [...guesses, guess]}, {path: '/'});
    setBlob(!blob);
  }
  return (
    <Bandagram
      correctAnswer={correctAnswer}
      initMissingLetters={2}
      initFakeLetters={2}
      random={random}
      guesses={guesses}
      onMakeGuess={onMakeGuess}
    />
  );
}

function answerOfTheDay() {
  const today = new Date();
  const firstDay = new Date(2023, 10, 18);
  const diff = Math.abs(today.getTime() - firstDay.getTime())/ (1000 * 60 * 60 * 24);
  const index = Math.floor(diff) % bandNames.length;
  const random = mulberry32(index);
  return {correctAnswer: bandNames[index], random};
}

function guessesOfTheDay(cookies: Cookies) {
  const cookie: DailyState = cookies.get('dailyState');
  const today = (new Date()).toDateString();
  if (cookie?.date === today) {
    return cookie.guesses;
  } else {
    cookies.set('dailyState', {date: today, guesses: []}, {path: '/'});
    return [];
  }
}