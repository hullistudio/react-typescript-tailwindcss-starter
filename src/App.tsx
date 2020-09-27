import React from "react";
import { Button } from "./components";

import "./styles/index.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Valider" />
        <Button label="Valider" loading={true} />
        <Button label="Valider" />
        <Button label="Valider" fullWidth={true} />
      </header>
    </div>
  );
};

export default App;
