import React from "react";
import { Cards } from "../../feature/characters/components/card/cards";

import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game Of Thrones</h1>
        <Cards></Cards>
      </header>
    </div>
  );
}

export default App;
