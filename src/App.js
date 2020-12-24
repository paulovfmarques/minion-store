import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle/>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
:root {

  --headerGradient: linear-gradient(269.69deg,
    #0A75BC 0.8%, #0B99F7 30.89%,
    rgba(10, 117, 188, 0.87) 32.15%,
    #FCE029 32.16%, #FCE029 99.5%);

  --generalFont: 'Roboto', sans-serif;
  --titleFont: 'Bangers', cursive;
}

body {
  font-family: var(--generalFont);
  color: white;
}

/* #root {
  min-height: 100vh;
  width: 100%;  
} */
`;