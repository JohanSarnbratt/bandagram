import {Bandagram} from "./bandagram";
import React, {useMemo} from "react";
import {bandNames} from "./data/dailyquiz";
import {mulberry32} from "./data/mulberryrandom";
import Cookies from "universal-cookie";
import {DailyState} from "./cookie/cookie";
import {dayNumber} from "./dayNumber";

export const DailyQuiz = () => {
  const {correctAnswer, random} = useMemo(() => {
    return answerOfTheDay();
  }, []);
  const cookies = new Cookies('dailyState', { path: '/' });
  const [guesses, setGuesses] = useState(guessesOfTheDay(cookies))
  const onMakeGuess = (guess: string) => {
    const newGuesses = [...guesses, guess];
    cookies.set('dailyState', {...cookies.get('dailyState'), guesses: newGuesses}, {path: '/'});
    setGuesses(newGuesses); //TODO: This is a hack to get the guesses to update
  }
  return (
    <>
      <h1>Bandagram #{dayNumber()}</h1>
      <Bandagram
        correctAnswer={correctAnswer}
        initMissingLetters={2}
        initFakeLetters={2}
        random={random}
        guesses={guesses}
        onMakeGuess={onMakeGuess}
      />
    </>
  );
}

function answerOfTheDay() {
  const index = dayNumber() % bandNames.length;
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