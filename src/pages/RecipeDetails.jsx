import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();

  const recipes = {
    pancake: {
      title: "Pancake",
      description:
        "Soft and fluffy pancakes perfect for a delicious breakfast.",
      ingredients: [
        "All-purpose flour - 1 cup",
        "Milk - 1 cup",
        "Egg - 1 piece",
        "Sugar - 2 tbsp",
        "Butter - 2 tbsp",
        "Baking powder - 1 tsp",
      ],
      spices: [
        "Cinnamon powder - 1/2 tsp",
        "Vanilla essence - 1 tsp",
      ],
      cookingTime: "20 minutes",
      equipment: ["Mixing bowl", "Frying pan"],
      steps: [
        "Mix flour, sugar and baking powder.",
        "Add milk and egg to make batter.",
        "Heat pan with butter.",
        "Cook both sides until golden.",
        "Serve with syrup.",
      ],
    },

    omelette: {
      title: "Cheese Omelette",
      description: "A quick and cheesy breakfast recipe.",
      ingredients: [
        "Egg - 2 pieces",
        "Cheese - 1/2 cup",
        "Onion - 1 small",
        "Green chili - 2 pieces",
        "Butter - 1 tbsp",
      ],
      spices: [
        "Salt - 1/2 tsp",
        "Black pepper powder - 1/2 tsp",
        "Chili flakes - 1/2 tsp",
      ],
      cookingTime: "10 minutes",
      equipment: ["Bowl", "Frying pan"],
      steps: [
        "Beat eggs with spices.",
        "Add onion and chili.",
        "Cook in butter.",
        "Add cheese and serve.",
      ],
    },

    sandwich: {
      title: "Breakfast Sandwich",
      description: "A tasty sandwich for a quick morning meal.",
      ingredients: [
        "Bread - 4 slices",
        "Egg - 1 piece",
        "Cheese - 2 slices",
        "Lettuce",
        "Tomato",
        "Mayonnaise",
      ],
      spices: [
        "Black pepper powder - 1/2 tsp",
        "Chili flakes - 1/2 tsp",
      ],
      cookingTime: "15 minutes",
      equipment: ["Frying pan", "Toaster"],
      steps: [
        "Cook egg with spices.",
        "Toast bread.",
        "Add egg, cheese and vegetables.",
        "Serve sandwich.",
      ],
    },

    biriyani: {
      title: "Chicken Biryani",
      description:
        "A traditional flavorful rice dish made with spicy chicken and aromatic spices.",
      ingredients: [
        "Basmati rice - 2 cups",
        "Chicken - 500g",
        "Onion - 3 medium",
        "Yogurt - 1/2 cup",
        "Ginger paste - 1 tbsp",
        "Garlic paste - 1 tbsp",
        "Oil - 1/2 cup",
      ],
      spices: [
        "Chili powder - 1 tsp",
        "Turmeric powder - 1/2 tsp",
        "Cumin powder - 1 tsp",
        "Coriander powder - 1 tsp",
        "Garam masala - 1 tsp",
        "Cinnamon - 2 sticks",
        "Cardamom - 4 pieces",
        "Cloves - 4 pieces",
      ],
      cookingTime: "1 hour",
      equipment: ["Cooking pot", "Frying pan"],
      steps: [
        "Marinate chicken with yogurt and spices.",
        "Fry onions until golden.",
        "Cook chicken with spices.",
        "Boil rice separately.",
        "Layer rice and chicken together.",
        "Cook on low heat.",
      ],
    },

    burger: {
      title: "Chicken Burger",
      description:
        "Juicy homemade chicken burger with fresh vegetables and cheese.",
      ingredients: [
        "Burger bun - 1",
        "Chicken patty - 1",
        "Cheese slice - 1",
        "Lettuce",
        "Tomato",
        "Mayonnaise",
      ],
      spices: [
        "Chili powder - 1 tsp",
        "Black pepper powder - 1/2 tsp",
        "Garlic powder - 1/2 tsp",
      ],
      cookingTime: "30 minutes",
      equipment: ["Frying pan", "Knife"],
      steps: [
        "Season chicken patty with spices.",
        "Cook patty until fully done.",
        "Toast burger buns.",
        "Add vegetables, cheese and patty.",
        "Serve hot.",
      ],
    },

    friedrice: {
      title: "Fried Rice",
      description:
        "Delicious fried rice prepared with vegetables and egg.",
      ingredients: [
        "Cooked rice - 3 cups",
        "Egg - 2 pieces",
        "Carrot - 1/2 cup",
        "Capsicum - 1/2 cup",
        "Spring onion",
        "Oil - 2 tbsp",
      ],
      spices: [
        "Black pepper powder - 1 tsp",
        "Chili flakes - 1/2 tsp",
        "Salt - according to taste",
      ],
      cookingTime: "25 minutes",
      equipment: ["Wok/Frying pan"],
      steps: [
        "Heat oil in pan.",
        "Cook eggs and keep aside.",
        "Stir fry vegetables.",
        "Add rice and spices.",
        "Mix well and serve.",
      ],
    },

    grilledchicken: {
      title: "Grilled Chicken",
      description:
        "Juicy grilled chicken marinated with herbs and spices.",
      ingredients: [
        "Chicken - 500g",
        "Yogurt - 1/2 cup",
        "Garlic paste - 1 tbsp",
        "Lemon juice - 2 tbsp",
        "Oil - 2 tbsp",
      ],
      spices: [
        "Black pepper powder - 1 tsp",
        "Chili powder - 1 tsp",
        "Paprika - 1 tsp",
        "Salt",
      ],
      cookingTime: "45 minutes",
      equipment: ["Grill pan or oven", "Mixing bowl"],
      steps: [
        "Marinate chicken with spices.",
        "Keep for 30 minutes.",
        "Grill until golden and cooked.",
        "Serve hot.",
      ],
    },

    pizza: {
      title: "Margherita Pizza",
      description:
        "Classic pizza with tomato sauce, cheese and fresh flavors.",
      ingredients: [
        "Pizza dough - 1 base",
        "Tomato sauce - 1/2 cup",
        "Mozzarella cheese - 1 cup",
        "Fresh basil leaves",
        "Olive oil - 1 tbsp",
      ],
      spices: [
        "Oregano - 1 tsp",
        "Chili flakes - 1/2 tsp",
        "Black pepper powder - 1/2 tsp",
      ],
      cookingTime: "40 minutes",
      equipment: ["Oven", "Baking tray"],
      steps: [
        "Spread tomato sauce on pizza dough.",
        "Add cheese and spices.",
        "Bake until cheese melts.",
        "Serve hot.",
      ],
    },

    noodles: {
      title: "Vegetable Noodles",
      description:
        "Stir-fried noodles with fresh vegetables.",
      ingredients: [
        "Noodles - 200g",
        "Carrot - 1/2 cup",
        "Capsicum - 1/2 cup",
        "Onion - 1 piece",
        "Soy sauce - 2 tbsp",
        "Oil - 2 tbsp",
      ],
      spices: [
        "Black pepper powder - 1 tsp",
        "Chili flakes - 1/2 tsp",
        "Salt",
      ],
      cookingTime: "25 minutes",
      equipment: ["Wok/Frying pan", "Cooking pot"],
      steps: [
        "Boil noodles and drain water.",
        "Stir fry vegetables.",
        "Add noodles and sauce.",
        "Mix well and serve.",
      ],
    },

    coldcoffee: {
      title: "Cold Coffee",
      description:
        "A creamy and refreshing chilled coffee drink.",
      ingredients: [
        "Cold milk - 1 cup",
        "Coffee powder - 2 tsp",
        "Sugar - 2 tbsp",
        "Ice cubes",
        "Ice cream - 1 scoop",
      ],
      spices: ["Cocoa powder - optional"],
      cookingTime: "5 minutes",
      equipment: ["Blender", "Glass"],
      steps: [
        "Add all ingredients into blender.",
        "Blend until smooth.",
        "Pour into glass.",
        "Serve chilled.",
      ],
    },

    smoothie: {
      title: "Mango Smoothie",
      description:
        "A creamy mango drink perfect for summer.",
      ingredients: [
        "Mango - 1 cup",
        "Milk - 1 cup",
        "Yogurt - 1/2 cup",
        "Honey - 1 tbsp",
        "Ice cubes",
      ],
      spices: ["Cardamom powder - optional"],
      cookingTime: "5 minutes",
      equipment: ["Blender", "Glass"],
      steps: [
        "Cut mango into pieces.",
        "Add all ingredients in blender.",
        "Blend until smooth.",
        "Serve cold.",
      ],
    },

    lemonmint: {
      title: "Lemon Mint Juice",
      description:
        "A refreshing drink made with lemon and mint.",
      ingredients: [
        "Lemon - 2 pieces",
        "Mint leaves",
        "Water - 2 cups",
        "Sugar - 3 tbsp",
        "Ice cubes",
      ],
      spices: [
        "Black salt - 1/2 tsp",
        "Roasted cumin powder - 1/2 tsp",
      ],
      cookingTime: "10 minutes",
      equipment: ["Blender", "Strainer", "Glass"],
      steps: [
        "Blend lemon juice, mint and water.",
        "Strain the mixture.",
        "Add sugar and spices.",
        "Serve chilled.",
      ],
    },
  };

  const recipe = recipes[id];

  const saveRecipe = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to save recipes.");
      return;
    }

    const savedRecipes =
      JSON.parse(localStorage.getItem("savedRecipes")) || [];

    const recipeToSave = {
      id,
      ...recipe,
    };

    const exists = savedRecipes.find(
      (item) => item.id === id
    );

    if (!exists) {
      savedRecipes.push(recipeToSave);

      localStorage.setItem(
        "savedRecipes",
        JSON.stringify(savedRecipes)
      );

      alert("Recipe Saved");
    } else {
      alert("Recipe already saved");
    }
  };

  if (!recipe) {
    return <h1>Recipe Not Found</h1>;
  }

  return (
    <div className="recipe-details">

      <h1>{recipe.title}</h1>

      <p>{recipe.description}</p>

      <h2>Ingredients</h2>

      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Spices</h2>

      <ul>
        {recipe.spices.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Cooking Time</h2>

      <p>{recipe.cookingTime}</p>

      <h2>Equipment</h2>

      <ul>
        {recipe.equipment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Cooking Steps</h2>

      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <button
        onClick={saveRecipe}
        style={{
          backgroundColor: "#e88caf",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "25px",
          cursor: "pointer",
          marginTop: "20px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        ❤️ Save Recipe
      </button>

    </div>
  );
}

export default RecipeDetails;