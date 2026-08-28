import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://recipevault-backend-8l39.onrender.com/register",
        user
      );

      alert("Registration Successful!");

      setUser({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <p className="login-text">
          Create your RecipeVault account 🍴
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />

          <div
            style={{
              position: "relative",
              width: "100%",
              margin: "10px 0",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px",
                paddingRight: "45px",
                border: "1px solid #f2b6cd",
                borderRadius: "20px",
                outline: "none",
                boxSizing: "border-box",
                margin: "0",
              }}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#777",
                display: "flex",
                alignItems: "center",
                margin: "0",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;