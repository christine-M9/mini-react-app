import React from 'react';
import Details from './Details';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React App</h1>
      </header>
      <main>
        <div className="container">
          <Details />
        </div>
      </main>
    </div>
  );
}

export default App;
