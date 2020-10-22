import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Goodbye from './Goodbye';

const timeOfDay = "Evening"

renderComponents = () => {
  if(timeOfDay === "Evening"){
    return( 
      <Goodbye />
    )
  } else{
    return(
      <Greeting />
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {renderComponents()}
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
