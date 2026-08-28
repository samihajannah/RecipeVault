import React from "react";
import { Link } from "react-router-dom";

function SavedRecipes() {
  const token = localStorage.getItem("token");

  // User is not logged in
  if (!token) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px",
        }}
      >
        <h1>Please Login 🔒</h1>

        <p>
          Login first to view your saved recipes.
        </p>

        <Link to="/login">
          <button
            style={{
              background: "#e88caf",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "20px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Go To Login
          </button>
        </Link>
      </div>
    );
  }

  // Get saved recipes
  const savedRecipes =
    JSON.parse(localStorage.getItem("savedRecipes")) || [];

  // Remove saved recipe
  const removeRecipe = (id) => {
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe.id !== id
    );

    localStorage.setItem(
      "savedRecipes",
      JSON.stringify(updatedRecipes)
    );

    window.location.reload();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Saved Recipes ❤️</h1>

      {savedRecipes.length === 0 ? (
        <p>No saved recipes yet.</p>
      ) : (
        savedRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              background: "#fff7fb",
              border: "1px solid #f2b6cd",
              borderRadius: "15px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>{recipe.title}</h2>

            <p>{recipe.description}</p>

            <p>
              <strong>Cooking Time:</strong>{" "}
              {recipe.cookingTime}
            </p>

            <Link to={`/recipe/${recipe.id}`}>
              <button
                style={{
                  background: "#e88caf",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                View Recipe
              </button>
            </Link>

            <button
              onClick={() => removeRecipe(recipe.id)}
              style={{
                background: "#ff6b6b",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedRecipes;