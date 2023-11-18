import React, {FormEvent, useMemo} from 'react';
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
const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
`;

interface Props {
  correctAnswer: string;
  initMissingLetters: number;
  initFakeLetters: number;
  random: () => number;
  guesses: string[];
  onMakeGuess: (guess: string) => void;
  playAgain?(): void;
}

export const Bandagram = ({correctAnswer, initMissingLetters, initFakeLetters, random, guesses, onMakeGuess, playAgain}: Props) => {
  const [text, setText] = React.useState('');
  const missingLetters = Math.max(initMissingLetters - Math.floor(guesses.length/2), 0)
  const noFakeLetters = Math.max(initFakeLetters - Math.ceil(guesses.length/2), 0)

  //Overusing useMemo to avoid activeRow re-renders when typing
  const correctLetters = useMemo((): string[] => {
    return shuffle(stringToCharList(correctAnswer.toLowerCase()), random);
  }, [correctAnswer, random])
  const letters = useMemo(() => {
    return missingLetters > 0 ? correctLetters.slice(0, -missingLetters) : correctLetters
  }, [missingLetters, correctLetters]);
  const allFakeLetters = useMemo((): string[] => {
    return stringToCharList(randomString(initFakeLetters, random));
  }, [initFakeLetters, random])
  const fakeLetters = useMemo(() => {
    return allFakeLetters.slice(0, noFakeLetters);
  }, [noFakeLetters, allFakeLetters]);
  const allLetters = useMemo(() => {
    return shuffle([...letters, ...fakeLetters], random);
  }, [letters, fakeLetters, random]);
  const onGuess = (event: FormEvent) => {
    event.preventDefault()
    onMakeGuess(text)
    setText('')
  }
  const gameOver = (guesses.length && compareStrings(guesses[guesses.length - 1], correctAnswer)) || guesses.length > 5;

  return (
      <Page >
        {guesses.map((guess, i) => {
          return (<Row key={i}>
            {generateGuessRow(guess, correctAnswer, fakeLetters)}
          </Row>)
        })}
        {gameOver ?
          (<Finished correctAnswer={correctAnswer} guesses={guesses} playAgain={playAgain}/>) :
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
  );
}