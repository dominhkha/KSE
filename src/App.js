import React from 'react';
import logo from './logo.svg';
import './App.css';


import Page from "./elements/page"
function App() {
  return (
    <div className="App" style={{width: "100%",display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"}}>
      <Page/>
    </div>
  );
}

export default App;
