import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";
import Drinks from "./pages/Drinks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecipeDetails from "./pages/RecipeDetails";
import SavedRecipes from "./pages/SavedRecipes";
import Admin from "./pages/Admin";

function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const userEmail = localStorage.getItem("userEmail");

  const isAdmin = userEmail === "j7493482@gmail.com";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");

    alert("Logged Out Successfully");

    navigate("/login");

    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar">
        <h2>🍽️ RecipeVault</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <div className="dropdown">
            <span>Categories ▾</span>

            <div className="dropdown-content">
              <Link to="/breakfast">Breakfast</Link>
              <Link to="/lunch">Lunch</Link>
              <Link to="/dinner">Dinner</Link>
              <Link to="/drinks">Drinks</Link>
            </div>
          </div>

          <Link to="/saved-recipes">
            Saved Recipes ❤️
          </Link>

          {/* Admin link will only show for admin */}
          {isAdmin && (
            <Link to="/admin">
              Admin
            </Link>
          )}

          {!token ? (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                background: "#e88caf",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/breakfast"
          element={<Breakfast />}
        />

        <Route
          path="/lunch"
          element={<Lunch />}
        />

        <Route
          path="/dinner"
          element={<Dinner />}
        />

        <Route
          path="/drinks"
          element={<Drinks />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/recipe/:id"
          element={<RecipeDetails />}
        />

        <Route
          path="/saved-recipes"
          element={<SavedRecipes />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />
      </Routes>
    </div>
  );
}

export default App;