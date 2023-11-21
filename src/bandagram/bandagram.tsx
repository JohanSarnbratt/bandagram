import React, {FormEvent, useCallback, useEffect, useMemo, useRef} from 'react';
import {shuffle} from "./shuffle";
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";
import {generateActiveRow} from "./letters/generateActiveRow";
import {stringToCharList} from "./letters/stringToCharList";
import {generateGuessRow} from "./letters/generateGuessRow";
import {compareStrings} from "./letters/compareStrings";
import {randomString} from "./letters/randomString";
import {Finished} from "./Finished";
import {generateInputRow} from "./letters/generateInputRow";

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

  const onKeyDown = useCallback((letter: string) => {
    if (letter.length === 1) {
      setText(text + letter);
    } else if (letter === 'Backspace') {
      setText(text.slice(0, -1));
    } else if (letter === 'Enter' && text.length > 0) {
      onMakeGuess(text)
      setText('')
    }

  }, [onMakeGuess, text])
  const backgroundKeyDown = useCallback((e: KeyboardEvent) => {
    // Handle any keydown events globally
    console.log('Key pressed:', e.key);
    onKeyDown(e.key);
  }, [onKeyDown]);
  useEffect(() => {
    document.addEventListener('keydown', backgroundKeyDown);

    return () => {
      document.removeEventListener('keydown', backgroundKeyDown);
    };
  }, [backgroundKeyDown]);
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
  const onLetterClick = (letter: string) => {
    setText(text + letter)
  };
  const gameOver = (guesses.length && compareStrings(guesses[guesses.length - 1], correctAnswer)) || guesses.length > 5;
  const hiddenInputRef = useRef(null);

  // @ts-ignore
  const focusIt = () => hiddenInputRef?.current?.focus();
  useEffect(() => {
    // Focus on the hidden input when the component mounts
    // @ts-ignore
    hiddenInputRef?.current?.focus();
  }, []);

  const inputKeyDown = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle keyboard events here
    console.log('Key pressed:', event);
    onKeyDown(event.target.value);
  };
  return (
      <Page >
        <input
          ref={hiddenInputRef}
          style={{ position: 'absolute', left: '-9999px' }}
          value={''}
          onChange={inputKeyDown}
        />
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
              {generateActiveRow(text, allLetters, onLetterClick)}
            </Row>
            <form onSubmit={onGuess}>
              {generateInputRow(text)}
              <Button type="submit" onClick={onGuess}>Guess</Button>
              <Button onClick={focusIt}>keyboard</Button>
            </form>
          </>)
        }
      </Page>
  );
}