import {Card} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

interface Props {
  letter: string;
  guessed: boolean;
  wrong?: boolean;
}

const LetterCard = styled(Card)`
  width: 25px;
  height: 25px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`

export const HintLetter = ({letter, guessed, wrong}: Props): React.JSX.Element => {
  const color = guessed ? "green" : wrong ? "red" : undefined;
  const textColor = guessed ? "white" : undefined;
  return (<LetterCard style={{backgroundColor: color, color: textColor}}>{letter}</LetterCard>);
}