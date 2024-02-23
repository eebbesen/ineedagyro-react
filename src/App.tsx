import React from 'react';
import logo from './open_gyro_outline.png';
import './App.css';
import './Loading'
import Loading from './Loading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Loading />
      </header>
    </div>
  );
}

export default App;
