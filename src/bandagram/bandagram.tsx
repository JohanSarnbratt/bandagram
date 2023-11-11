import React, {FormEvent, useMemo, useState} from 'react';
import {shuffle} from "./shuffle";
import styled from "@emotion/styled";
import {Button, Input} from "@mui/material";
import {generateActiveRow} from "./letters/generateActiveRow";
import {stringToCharList} from "./letters/stringToCharList";
import {generateGuessRow} from "./letters/generateGuessRow";
import {compareStrings} from "./letters/compareStrings";
import {bandNames} from "./data/quizbands";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const CenterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  `;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  margin-top: 50px;
`;

export const Bandagram = () => {
  const [guesses, setGuesses] = useState<string[]>([])
  const [text, setText] = React.useState('');
  const correctAnswer = useMemo(() => {
    return bandNames[Math.floor(Math.random() * bandNames.length)];
  }, []);
  const letters = useMemo(() => {
    return shuffle(stringToCharList(correctAnswer.toLowerCase()));
  }, [correctAnswer])
  const onGuess = (event: FormEvent) => {
    event.preventDefault()
    setGuesses([...guesses, text])
    setText('')
  }
  const correct = guesses.length && compareStrings(guesses[guesses.length - 1], correctAnswer)

  return (
    <CenterPage>

    <Page >
      {guesses.map((guess, i) => {
        return (<Row key={i}>
          {generateGuessRow(guess, correctAnswer)}
        </Row>)
      })}
      {correct ? <CenterPage>
        <caption> {correctAnswer}</caption>
        <h1>Good job!</h1>
        </CenterPage> :

      <>
        <Row>
          {generateActiveRow(text, letters)}
        </Row>
        <Row>
          <form onSubmit={onGuess}>
            <Input style={{width: 300}} value={text} onChange={(event) => setText(event.target.value)} />
            <Button type="submit" onClick={onGuess}>Guess</Button>
          </form>
        </Row>
      </>
      }
    </Page>
    </CenterPage>
  );
}