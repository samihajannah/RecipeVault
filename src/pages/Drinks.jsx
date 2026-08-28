import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

import coldcoffee from "../assets/coldcoffee.jpg";
import mangoosmoothie from "../assets/mangoosmoothie.jpg";
import lemonmintjuice from "../assets/lemonmintjuice.jpg";


function Drinks() {

  return (
    <div className="category-page">


      <h1>Drinks 🥤</h1>


      <p className="category-text">
        Refresh yourself with delicious and healthy drinks.
      </p>



      <div className="recipe-container">



        <div className="recipe-card">

          <img 
            src={coldcoffee} 
            alt="Cold Coffee" 
          />

          <h3>
            Cold Coffee
          </h3>

          <p>
            Creamy and refreshing cold coffee recipe.
          </p>

          <Link to="/recipe/coldcoffee">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>




        <div className="recipe-card">

          <img 
            src={mangoosmoothie} 
            alt="Mango Smoothie" 
          />

          <h3>
            Mango Smoothie
          </h3>

          <p>
            Fresh and healthy mango smoothie.
          </p>

          <Link to="/recipe/smoothie">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>




        <div className="recipe-card">

          <img 
            src={lemonmintjuice} 
            alt="Lemon Mint Juice" 
          />

          <h3>
            Lemon Mint Juice
          </h3>

          <p>
            Cool and refreshing summer drink.
          </p>

          <Link to="/recipe/lemonmint">
            <button className="view-btn">
              View Recipe
            </button>
          </Link>

        </div>



      </div>


    </div>
  );
}


export default Drinks;