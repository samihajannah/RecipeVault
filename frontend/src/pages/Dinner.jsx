import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

import grilledchicken from "../assets/grilledchicken.jpeg";
import margheritapizza from "../assets/margheritapizza.jpeg";
import vegetablenoodles from "../assets/vegetablenoodles.jpeg";


function Dinner() {

  return (
    <div className="category-page">


      <h1>Dinner 🍽️</h1>


      <p className="category-text">
        Enjoy delicious and comforting dinner recipes.
      </p>



      <div className="recipe-container">



        <div className="recipe-card">

          <img 
            src={grilledchicken} 
            alt="Grilled Chicken" 
          />

          <h3>
            Grilled Chicken
          </h3>

          <p>
            Juicy and flavorful grilled chicken recipe.
          </p>

          <Link to="/recipe/grilledchicken">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>




        <div className="recipe-card">

          <img 
            src={margheritapizza} 
            alt="Margherita Pizza" 
          />

          <h3>
            Margherita Pizza
          </h3>

          <p>
            Classic Italian pizza with cheese and tomato.
          </p>

          <Link to="/recipe/pizza">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>




        <div className="recipe-card">

          <img 
            src={vegetablenoodles} 
            alt="Vegetable Noodles" 
          />

          <h3>
            Vegetable Noodles
          </h3>

          <p>
            Healthy and tasty vegetable noodles recipe.
          </p>

          <Link to="/recipe/noodles">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>



      </div>


    </div>
  );
}


export default Dinner;