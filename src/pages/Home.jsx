import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Home.css";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://recipevault-backend-8l39.onrender.com/recipes")
      .then((res) => {
        setRecipes(res.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">

          <h3>Welcome to</h3>

          <h1>RecipeVault</h1>

          <p>
            Save, organize and explore your favorite recipes
            all in one place.
          </p>

          <Link to="/breakfast">
            <button>Explore Recipes</button>
          </Link>

        </div>
      </section>

      {/* Popular Recipes */}
      <section className="recipes">

        <h2>Popular Recipes</h2>

        <div className="recipe-container">

          {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>

              <h3>{recipe.title}</h3>

              <p>{recipe.description}</p>

              <p>
                <strong>Cooking Time:</strong>{" "}
                {recipe.cookingTime}
              </p>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;