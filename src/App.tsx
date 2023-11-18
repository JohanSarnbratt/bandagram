import './App.css';
import React from 'react';
import {Tab, Tabs} from "@mui/material";
import styled from "@emotion/styled";
import {Practice} from "./bandagram/Practice";
import {DailyQuiz} from "./bandagram/DailyQuiz";

const CenterPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

enum TabsEnum {
  DailyQuiz = 'DailyQuiz',
  Practice = 'Practice'
}
//TODO välj mellan träna och daily quiz
function App() {
  const [value, setValue] = React.useState(TabsEnum.DailyQuiz);

  return (
    <CenterPage className="App">

      <Tabs value={value}>
        <Tab label="BANDAGRAM" value={TabsEnum.DailyQuiz} onClick={() => setValue(TabsEnum.DailyQuiz)}/>
        <Tab label="Practice" value={TabsEnum.Practice} onClick={() => setValue(TabsEnum.Practice)}/>
      </Tabs>
      {value === TabsEnum.Practice &&

        <Practice />
      }
      {value === TabsEnum.DailyQuiz &&
        <DailyQuiz />
      }

    </CenterPage>
  );
}

export default App;
