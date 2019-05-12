import React from 'react';
import logo from './logo.svg';
import Toolbar123 from './components/Toolbar/Toolbar'
import drawerToggleButton from './components/Toolbar/drawerToggleButton'
import './App.css';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <drawerToggleButton />
      <Toolbar123 />
      <main style={{marginTop:'64px'}}>
        <p>page content!</p>
      </main>
      
      </header>
    </div>
  );
  }
}

export default App;
