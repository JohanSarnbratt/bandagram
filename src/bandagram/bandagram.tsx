import React, {FormEvent, useMemo, useState} from 'react';
import {shuffle} from "./shuffle";
import styled from "@emotion/styled";
import {Button, Input, Typography} from "@mui/material";
import {generateActiveRow} from "./letters/generateActiveRow";
import {stringToCharList} from "./letters/stringToCharList";
import {generateGuessRow} from "./letters/generateGuessRow";
import {compareStrings} from "./letters/compareStrings";
import {randomString} from "./letters/randomString";
import {Finished} from "./Finished";

const Row = styled.div`
  display: inline-block;
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

interface Props {
  correctAnswer: string;
  initMissingLetters: number;
  initFakeLetters: number;
}

export const Bandagram = ({correctAnswer, initMissingLetters, initFakeLetters}: Props) => {
  const [guesses, setGuesses] = useState<string[]>([])
  const [text, setText] = React.useState('');
  const [missingLetters, setMissingLetters] = useState(initMissingLetters)
  const [noFakeLetters, setNoFakeLetters] = useState(initFakeLetters)

  //Overusing useMemo to avoid activeRow re-renders when typing
  const correctLetters = useMemo((): string[] => {
    return shuffle(stringToCharList(correctAnswer.toLowerCase()));
  }, [correctAnswer])
  const letters = useMemo(() => {
    return missingLetters > 0 ? correctLetters.slice(0, -missingLetters) : correctLetters
  }, [missingLetters, correctLetters]);
  const allFakeLetters = useMemo((): string[] => {
    return stringToCharList(randomString(initFakeLetters));
  }, [initFakeLetters])
  const fakeLetters = useMemo(() => {
    return allFakeLetters.slice(0, noFakeLetters);
  }, [noFakeLetters, allFakeLetters]);
  const allLetters = useMemo(() => {
    return shuffle([...letters, ...fakeLetters]);
  }, [letters, fakeLetters]);
  const onGuess = (event: FormEvent) => {
    event.preventDefault()
    if (guesses.length % 2 === 0 && noFakeLetters > 0) {
      setNoFakeLetters(noFakeLetters - 1);
    }
    if (guesses.length % 2 === 1 && missingLetters > 0) {
      setMissingLetters(missingLetters - 1);
    }
    setGuesses([...guesses, text])
    setText('')
  }
  const gameOver = (guesses.length && compareStrings(guesses[guesses.length - 1], correctAnswer)) || guesses.length > 5;

  return (
    <CenterPage>
      <Page >
        {guesses.map((guess, i) => {
          return (<Row key={i}>
            {generateGuessRow(guess, correctAnswer)}
          </Row>)
        })}
        {gameOver ?
          (<Finished correctAnswer={correctAnswer} lastGuess={guesses[guesses.length - 1]}/>) :
          (<>
            <Typography variant="body2" align="center" sx={{fontSize: 12}}>
              Missing letters: {missingLetters} Fake letters: {noFakeLetters}
            </Typography>
            <Row>
              {generateActiveRow(text, allLetters)}
            </Row>
            <form onSubmit={onGuess}>
              <Input style={{maxWidth: 300, width: '100%'}} value={text} onChange={(event) => setText(event.target.value)} />
              <Button type="submit" onClick={onGuess}>Guess</Button>
            </form>
          </>)
        }
      </Page>
    </CenterPage>
  );
}