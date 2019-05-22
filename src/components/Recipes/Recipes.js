import React from 'react';
import './Recipes.css';

const Recipes = props =>{
    return(
        <div className="container">
        <div className="row">
        {props.recipes.map( recipes => {
          return ( 
          <div className="col-md-4"key={recipes.recipes_id}>
            <div className="recipe__box">
                 <img className="recipe__box-img"src={recipes.image_url} alt={recipes.title} />
                 <p >{recipes.title}</p>
            </div>
          </div>
          )
        })}
        </div>
        </div>
        
    );




};

export default Recipes;