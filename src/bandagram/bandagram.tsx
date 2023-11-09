import React, {useMemo} from 'react';
import {bands} from "./bands";
import {shuffle} from "./shuffle";
import {HintLetter} from "./letters/hintLetter";
import styled from "@emotion/styled";
import {TextField} from "@mui/material";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  margin-top: 50px;
`;

export const Bandagram = () => {
  const [text, setText] = React.useState('');
  const answer = useMemo(() => {
    return bands[Math.floor(Math.random() * bands.length)];
  }, []);
  const letters = useMemo(() => {
    return shuffle(answer.toLowerCase()
      .split("")
      .filter((char) => char !== " "));
  }, [answer])
  const correct = text.toLowerCase() === answer.toLowerCase();

  return (
    <Page >
      <Row>
        {letters.map(letter => {
          const guessed = text.toLowerCase().includes(letter);
          return <HintLetter letter={letter} guessed={guessed} />;
        })}
      </Row>
      <TextField style={{width: 300}} value={text} onChange={(event) => setText(event.target.value)}/>
      <div>Result: {correct ? 'Correct!' : "That's not a band"}</div>
      <div style={{color: "white"}}>{answer}</div>
    </Page>
  );
}