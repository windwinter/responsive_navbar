import React from 'react';
import logo from './logo.svg';
import Toolbar from './components/Toolbar/Toolbar'
import './App.css';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <Toolbar />
      <main style={{marginTop:'64px'}}>
        <p>page content!</p>
      </main>
      
      </header>
    </div>
  );
  }
}

export default App;
