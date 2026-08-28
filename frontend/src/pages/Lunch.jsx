import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

import biriyani from "../assets/biriyani.jpg";
import burger from "../assets/burger.jpg";
import friedrice from "../assets/friedrice.jpg";


function Lunch() {

  return (
    <div className="category-page">


      <h1>Lunch 🍛</h1>


      <p className="category-text">
        Enjoy delicious and satisfying lunch recipes.
      </p>



      <div className="recipe-container">



        <div className="recipe-card">

          <img 
            src={biriyani} 
            alt="Chicken Biryani" 
          />

          <h3>
            Chicken Biryani
          </h3>

          <p>
            A flavorful and traditional lunch recipe.
          </p>

          <Link to="/recipe/biriyani">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>




        <div className="recipe-card">

          <img 
            src={burger} 
            alt="Chicken Burger" 
          />

          <h3>
            Chicken Burger
          </h3>

          <p>
            Juicy and tasty homemade burger.
          </p>

          <Link to="/recipe/burger">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>




        <div className="recipe-card">

          <img 
            src={friedrice} 
            alt="Fried Rice" 
          />

          <h3>
            Fried Rice
          </h3>

          <p>
            Delicious rice recipe for lunch.
          </p>

          <Link to="/recipe/friedrice">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>



      </div>


    </div>
  );
}


export default Lunch;