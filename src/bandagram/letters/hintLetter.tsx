import {Card} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

interface Props {
  letter: string;
  guessed: boolean;
}

const LetterCard = styled(Card)`
  padding: 3px;
`

export const HintLetter = ({letter, guessed}: Props): React.JSX.Element => {
  const color = guessed ? "green" : undefined;
  const textColor = guessed ? "white" : undefined;
  return (<LetterCard style={{backgroundColor: color, color: textColor}}>{letter}</LetterCard>);
}