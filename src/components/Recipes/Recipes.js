import React from 'react';
import './Recipes.css';

const Recipes = props =>{
    return(
        <div className="container">
        <div className="row">
        {props.recipes.map( recipes => {
          return ( 
          <div className="col-lg-3 col-md-4 col-sm-6 col-6"key={recipes.recipes_id}>
            <div className="recipe__box">
                 <img className="recipe_img" style={{width:"100%",height:"150px",}}src={recipes.image_url} alt={recipes.title} />
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