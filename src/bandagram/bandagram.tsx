import React, {useMemo} from 'react';
import {bands} from "./bands";
import {shuffle} from "./shuffle";

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
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div>
        {letters.map(letter => {
          const color = text.toLowerCase().includes(letter) ? "green" : undefined;
          return (<button style={{backgroundColor: color}}>{letter}</button>);
        })}
      </div>
      <textarea style={{width: 300}} value={text} onChange={(event) => setText(event.target.value)}/>
      <div>Result: {correct ? 'Correct!' : "That's not a band"}</div>
      <div style={{color: "white"}}>{answer}</div>
    </div>
  );
}