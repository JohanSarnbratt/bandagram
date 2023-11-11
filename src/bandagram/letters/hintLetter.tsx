import {Card} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

interface Props {
  letter: string;
  backgroundColor?: string;
}

const LetterCard = styled(Card)`
  width: 25px;
  height: 25px;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`

export const HintLetter = ({letter, backgroundColor}: Props): React.JSX.Element => {
  const textColor = backgroundColor ? "white" : undefined;
  return (<LetterCard style={{backgroundColor: backgroundColor, color: textColor}}>{letter}</LetterCard>);
}