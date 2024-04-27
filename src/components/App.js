import logo from '../logo.svg';
import './App.scss';
import {getLogements} from "../services/back-end-service";
import {useEffect, useState} from "react";

function App() {
  const [logements, updateLogements] = useState(getLogements());

  useEffect(() => {
    console.log('Effect executé sur logements');
  }, [logements]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
