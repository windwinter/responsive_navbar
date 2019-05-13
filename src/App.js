import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Toolbar/sideDrawer';

import './App.css';

class App extends React.Component{
  state={
    sideDrawerOpen:false,
  };

  drawerToggleClickHandler =()=>{
    this.setState((prevState)=>{
      return{sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler =()=>{
    this.setState({
      sideDrawerOpen:false,
    })
  }

  render(){
let sidedrawer;
  sidedrawer=<SideDrawer click={this.backdropClickHandler} sideDrawerOpen={this.state.sideDrawerOpen}/>;


let Appclass = 'App';
  if (this.state.sideDrawerOpen) {
    Appclass='App open';
  }

  return (
    <div className={Appclass}>
      <header className="App-header">
      
      <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} sideDrawerOpen={this.state.sideDrawerOpen}/>
      {sidedrawer}
      <main style={{marginTop:'64px'}}>
        <p>page content123!</p>
      </main>
      
      </header>
    </div>
  );
  }
}

export default App;
