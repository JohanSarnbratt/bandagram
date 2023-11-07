import React, {useMemo} from 'react';

export const Bandagram = () => {
  const [text, setText] = React.useState('');
  const answer = 'paramore';
  const letters = useMemo(() => {
    return answer
      .split("")
      .filter((char) => char !== " ")
      .sort(() => Math.random() - 0.5);
  }, [])

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div>
        {letters.map(letter => {
          return (<button>{letter}</button>);
        })}
      </div>
      <textarea style={{width: 300}} value={text} onChange={(event) => setText(event.target.value)}/>
      <div>Result: {text === answer ? 'Correct!' : "That's not a band"}</div>
    </div>
  );
}