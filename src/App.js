var input =  require('./App.css');

import React from 'react';
import logo from './logo.svg';




import styled, { css } from 'styled-components'

console.log("hi")

console.log("new addition in master")

console.log("checkWorkingOfGit")

console.log("checkReset")

console.log("finalCommit")

console.log("I'm back")


const MyInput = styled.input`
background-color:pink;
color:yellow;
`;

const MainTheme = styled.div`
width: 600px;
height: 150px;
background-color: red;
& > ${MyInput}:focus {
  color: green;
}
`;

function App() {
  return (
    <div>
      <MainTheme>
        <MyInput />
      </MainTheme>
      <MyInput />
    </div>
  );
}

export default App;
