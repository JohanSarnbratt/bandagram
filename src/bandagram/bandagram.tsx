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
  text-align: left;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Center = styled.div`
  align-items: center;
`;
const WideForm = styled.form`
  width: 100%;
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
  const correctLength = correctLetters.length;
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
    event.stopPropagation();
    if (text.length > 0) {
      onMakeGuess(text)
      setText('')
    }
  }
  const onLetterClick = (letter: string) => {
    setText(text + letter)
  };
  const gameOver = (guesses.length && compareStrings(guesses[guesses.length - 1], correctAnswer)) || guesses.length > 5;
  const hiddenInputRef = useRef(null);

  const focusIt = () => {
    if (!gameOver) {
      // @ts-ignore
      hiddenInputRef?.current?.focus();
    }
  }
  useEffect(() => {
    // Focus on the hidden input all the time
    focusIt();
    // @ts-ignore
  }, [hiddenInputRef?.current?.focus]);
  useEffect(() => {
    // Focus on the hidden input all the time
    //TODO don't focus when game is over
    focusIt();
  });

  const inputKeyDown = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    //auto complete allows you to input more letters at a time:
    //todo take first n letters of event.target.value (ignoring spaces) and set text to that
    //filter input from spaces? :thinking_emoji:
    //stringToCharList removes spaces, convert to get proper length
    const str = stringToCharList(event.target.value);
    if (str.length <= correctLetters.length) {
      setText(event.target.value);
    }
  };
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
              {generateActiveRow(text, allLetters, onLetterClick)}
            </Row>
            <WideForm onSubmit={onGuess}>
              <Column>
                <Row>
                  {generateInputRow(text)}
                </Row>
                <Center>
                  <Button type="submit" onClick={onGuess}>Guess</Button>
                </Center>
              </Column>
              <input
                ref={hiddenInputRef}
                style={{ position: 'absolute', left: '-9999px' }}
                value={text}
                onChange={inputKeyDown}
                onBlur={focusIt}
              />
            </WideForm>
          </>)
        }
      </Page>
  );
}