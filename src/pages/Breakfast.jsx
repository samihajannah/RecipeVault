import { Link } from "react-router-dom";
import React from "react";
import "./Category.css";

import pancake from "../assets/pancake.jpg";
import omelette from "../assets/omelette.jpg";
import sandwich from "../assets/sandwich.jpg";


function Breakfast() {

  return (
    <div className="category-page">

      <h1>Breakfast 🍳</h1>

      <p className="category-text">
        Start your day with delicious and healthy breakfast recipes.
      </p>


      <div className="recipe-container">


        <div className="recipe-card">

          <img src={pancake} alt="Pancake" />

          <h3>
            Pancake
          </h3>

          <p>
            Soft and fluffy pancakes for a perfect morning.
          </p>

          <Link to="/recipe/pancake">
            <button className="view-btn">View Recipe</button>
          </Link>

        </div>



        <div className="recipe-card">

          <img src={omelette} alt="Omelette" />

          <h3>
            Cheese Omelette
          </h3>

          <p>
            Easy and tasty omelette recipe.
          </p>

          <Link to="/recipe/omelette">
            <button className="view-btn">View Recipe</button>
          </Link>

        </div>



        <div className="recipe-card">

          <img src={sandwich} alt="Sandwich" />

          <h3>
            Breakfast Sandwich
          </h3>

          <p>
            Quick and delicious breakfast recipe.
          </p>

          <Link to="/recipe/sandwich">
            <button className="view-btn">View Recipe</button>
          </Link>

        </div>


      </div>


    </div>
  );
}


export default Breakfast;