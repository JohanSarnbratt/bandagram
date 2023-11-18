import {Typography} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import {compareStrings} from "./letters/compareStrings";

const CenterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface Props {
  correctAnswer: string;
  lastGuess: string;
  playAgain?(): void;
}
//TODO gör en share knapp (bara för daily quiz?)
export const Finished = ({correctAnswer, lastGuess, playAgain}: Props) => {
  const correct =  compareStrings(lastGuess, correctAnswer);
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
      <button onClick={playAgain}>Play again</button>
    )}
    </CenterPage>
  );
};