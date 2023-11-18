import {Button, Typography} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import {compareStrings} from "./letters/compareStrings";
import {guessStatusOfLetters} from "./letters/generateGuessRow";
import {dayNumber} from "./dayNumber";

const CenterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface Props {
  correctAnswer: string;
  guesses: string[];
  playAgain?(): void;
}
//TODO gör en share knapp (bara för daily quiz?)
export const Finished = ({correctAnswer, guesses, playAgain}: Props) => {
  const correct =  compareStrings(guesses[guesses.length - 1], correctAnswer);
  return (
    <CenterPage>
      {correct ? (
        <>
          <Typography variant="body1"> {correctAnswer}</Typography>
          <h1>Good job!</h1>
        </>
    ) : (
      <>
        <Typography variant="body1"> {correctAnswer}</Typography>
        <h1>So close! Better luck next time...</h1>
      </>
    )}
    {playAgain && (
      <Button onClick={playAgain} variant="contained">Play again</Button>
    )}
    {!playAgain && (
      <Button
        onClick={() => {navigator.clipboard.writeText(shareText(guesses, correctAnswer))}}
        variant="contained"
      >Share!</Button>
    )}
    </CenterPage>
  );
};

const shareText = (guesses: string[], correctAnswer: string): string => {

  const mojis = guesses.map(guess => {
    return guessStatusOfLetters(guess, correctAnswer, []).map(({guessLetter, correct, wrong}, index) => {
      if (correct) {
        return '🟢';
      } else if (wrong) {
        return '🔴';
      } else {
        return '⚪';
      }
    }).join('');
  }).join('\n');
  return `I finished Bandagram #${dayNumber()}\n${mojis}`;
}