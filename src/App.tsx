import './App.css';
import {Bandagram} from "./bandagram/bandagram";
import React, {useMemo} from 'react';
import {bandNames} from "./bandagram/data/properlengthbands";

//TODO välj mellan träna och daily quiz
function App() {
  const correctAnswer = useMemo(() => {
    return bandNames[Math.floor(Math.random() * bandNames.length)];
  }, []);
  return (
    <div className="App">
      <Bandagram correctAnswer={correctAnswer} initMissingLetters={2} initFakeLetters={2}/>
    </div>
  );
}

export default App;
