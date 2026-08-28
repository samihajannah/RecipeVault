const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Recipe = require("./models/Recipe");
const User = require("./models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("RecipeVault API Running");
});


// ================= REGISTER USER =================

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });


    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );


    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});
// ================= LOGIN USER =================

app.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});



// ================= CREATE RECIPE =================

app.post("/recipes", async (req, res) => {
  try {

    const recipe = await Recipe.create(req.body);

    res.status(201).json({
      success: true,
      recipe,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});




// ================= GET ALL RECIPES =================

app.get("/recipes", async (req, res) => {
  try {

    const recipes = await Recipe.find();

    res.status(200).json({
      success: true,
      recipes,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
});

app.delete("/recipes/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});




// ================= GET SINGLE RECIPE =================

app.get("/recipes/:id", async (req, res) => {

  try {

    const recipe = await Recipe.findById(req.params.id);


    if (!recipe) {

      return res.status(404).json({
        success: false,
        message: "Recipe not found",
      });

    }


    res.status(200).json({
      success: true,
      recipe,
    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});




// ================= DATABASE CONNECTION =================


mongoose
  .connect(process.env.MONGO_URI)

  .then(async () => {

    console.log("MongoDB Connected");


    const count = await Recipe.countDocuments();


    if (count === 0) {


      await Recipe.insertMany([

        {
          title: "Chicken Biryani",
          description: "Rich and flavorful traditional lunch recipe.",
          ingredients: [
            "Chicken",
            "Rice",
            "Onion"
          ],
          spices: [
            "Garam Masala",
            "Turmeric"
          ],
          cookingTime: "60 minutes",
          equipment: [
            "Pot"
          ],
          steps: [
            "Cook rice",
            "Cook chicken",
            "Mix together"
          ],
        },


        {
          title: "Grilled Chicken",
          description: "Juicy and delicious dinner recipe.",
          ingredients: [
            "Chicken Breast",
            "Olive Oil"
          ],
          spices: [
            "Black Pepper",
            "Paprika"
          ],
          cookingTime: "30 minutes",
          equipment: [
            "Grill Pan"
          ],
          steps: [
            "Season chicken",
            "Grill chicken",
            "Serve"
          ],
        },


        {
          title: "Margherita Pizza",
          description: "Classic pizza with cheesy flavor.",
          ingredients: [
            "Pizza Dough",
            "Cheese",
            "Tomato Sauce"
          ],
          spices: [
            "Oregano"
          ],
          cookingTime: "25 minutes",
          equipment: [
            "Oven"
          ],
          steps: [
            "Prepare dough",
            "Add toppings",
            "Bake"
          ],
        }

      ]);


      console.log("Sample recipes added");

    }


  })

  .catch((err) => {

    console.log("MongoDB Connection Error:", err);

  });





const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);

});