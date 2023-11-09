import React, {useMemo} from 'react';
import {bands} from "./bands";
import {shuffle} from "./shuffle";
import styled from "@emotion/styled";
import {TextField} from "@mui/material";
import {generateLetters} from "./letters/generateLetters";
import {stringToCharList} from "./letters/stringToCharList";

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
  const correctAnswer = useMemo(() => {
    return bands[Math.floor(Math.random() * bands.length)];
  }, []);
  const letters = useMemo(() => {
    return shuffle(stringToCharList(correctAnswer.toLowerCase()));
  }, [correctAnswer])
  const correct = text.toLowerCase() === correctAnswer.toLowerCase();

  return (
    <Page >
      <Row>
        {generateLetters(text, letters)}
      </Row>
      <TextField style={{width: 300}} value={text} onChange={(event) => setText(event.target.value)}/>
      {text.length > 3 && <div>{correct ? 'Correct!' : "That's not a band"}</div>}
      <div style={{color: "white"}}>{correctAnswer}</div>
    </Page>
  );
}