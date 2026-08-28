import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

function Admin() {
  const [recipes, setRecipes] = useState([]);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    cookingTime: "",
  });

  const fetchRecipes = () => {
    axios
      .get("https://recipevault-backend-8l39.onrender.com/recipes")
      .then((res) => {
        setRecipes(res.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const addRecipe = async () => {
    try {
      await axios.post(
        "https://recipevault-backend-8l39.onrender.com/recipes",
        {
          title: newRecipe.title,
          description: newRecipe.description,
          cookingTime: newRecipe.cookingTime,
          ingredients: [],
          spices: [],
          equipment: [],
          steps: [],
        }
      );

      alert("Recipe Added Successfully!");

      setNewRecipe({
        title: "",
        description: "",
        cookingTime: "",
      });

      fetchRecipes();
    } catch (error) {
      console.log(error);
      alert("Failed to Add Recipe");
    }
  };

  const deleteRecipe = async (id) => {
    try {
      await axios.delete(
        `https://recipevault-backend-8l39.onrender.com/recipes/${id}`
      );

      alert("Recipe Deleted Successfully!");

      fetchRecipes();
    } catch (error) {
      console.log(error);
      alert("Failed to Delete Recipe");
    }
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">
        Admin Dashboard 👩‍🍳
      </h1>

      <div className="admin-form">
        <h2>Add New Recipe</h2>

        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={newRecipe.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newRecipe.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cookingTime"
          placeholder="Cooking Time"
          value={newRecipe.cookingTime}
          onChange={handleChange}
        />

        <button
          className="add-btn"
          onClick={addRecipe}
        >
          Add Recipe
        </button>
      </div>

      <div className="recipe-list">
        <h2>All Recipes</h2>

        {recipes.map((recipe) => (
          <div
            className="recipe-card"
            key={recipe._id}
          >
            <h3>{recipe.title}</h3>

            <p>{recipe.description}</p>

            <p>
              <strong>Cooking Time:</strong>{" "}
              {recipe.cookingTime}
            </p>

            <button
              className="delete-btn"
              onClick={() =>
                deleteRecipe(recipe._id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;