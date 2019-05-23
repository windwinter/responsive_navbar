import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Toolbar/sideDrawer';
import Form from './components/Form';
import Recipes from './components/Recipes/Recipes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Api_key="fa40f77164a17cdb6de0159ffdbbe857";

class App extends React.Component{
  state={
    sideDrawerOpen:false,
    recipes:[],
  };

  

  getRecipe= async (e) =>{
    e.preventDefault();
    const recipename=e.target.elements.recipename.value;
    const api_call=await fetch(`https://www.food2fork.com/api/search?key=${Api_key}&q=${recipename}&count=5`);
    const data = await api_call.json();
    //var apiget={"count": 5, "recipes": [{"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35120", "title": "Bacon Wrapped Jalapeno Popper Stuffed Chicken", "source_url": "http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html", "recipe_id": "35120", "image_url": "http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg", "social_rank": 100.0, "publisher_url": "http://closetcooking.com"}, {"publisher": "Closet Cooking", "f2f_url": "http://food2fork.com/view/35169", "title": "Buffalo Chicken Chowder", "source_url": "http://www.closetcooking.com/2011/11/buffalo-chicken-chowder.html", "recipe_id": "35169", "image_url": "http://static.food2fork.com/Buffalo2BChicken2BChowder2B5002B0075c131caa8.jpg", "social_rank": 100.0, "publisher_url": "http://closetcooking.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/34889", "title": "Zesty Slow Cooker Chicken Barbeque", "source_url": "http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx", "recipe_id": "34889", "image_url": "http://static.food2fork.com/4515542dbb.jpg", "social_rank": 100.0, "publisher_url": "http://allrecipes.com"}, {"publisher": "The Pioneer Woman", "f2f_url": "http://food2fork.com/view/46906", "title": "Roast Chicken", "source_url": "http://thepioneerwoman.com/cooking/2012/08/roast-chicken/", "recipe_id": "46906", "image_url": "http://static.food2fork.com/roastchicken2feab.jpg", "social_rank": 100.0, "publisher_url": "http://thepioneerwoman.com"}, {"publisher": "The Pioneer Woman", "f2f_url": "http://food2fork.com/view/46996", "title": "Cajun Chicken Pasta", "source_url": "http://thepioneerwoman.com/cooking/2011/09/cajun-chicken-pasta/", "recipe_id": "46996", "image_url": "http://static.food2fork.com/cajun0676.jpg", "social_rank": 100.0, "publisher_url": "http://thepioneerwoman.com"}]}
    //const data=apiget;

    this.setState({
      recipes:data.recipes
    });
  }

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
      </header>
      <main style={{marginTop:'64px'}}>
        <p>page content123!</p>
      
      </main>
      <Form getRecipe={this.getRecipe}/>
      <Recipes recipes={this.state.recipes}/>
      

    </div>
  );
  }
}

export default App;
