import React from 'react';
import sc from './SoundController';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={sc.startMic()}>START</button>
        <button onClick={sc.stopMic()}>STOP</button>
      </div >
    );
  }
}

export default App;
