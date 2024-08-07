import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>FITWEAR</p>
      </div>
      <ul className="nav-menu">
        <li id="Shop" onClick={() => setActive("Shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Shop{" "}
          </Link>
          {active === "Shop" ? <hr /> : ""}
        </li>
        <li id="Men" onClick={() => setActive("Men")}>
          <Link to="/mens" style={{ textDecoration: "none" }}>
            {" "}
            Men{" "}
          </Link>{" "}
          {active === "Men" ? <hr /> : ""}
        </li>
        <li id="Women" onClick={() => setActive("Women")}>
          <Link to="/womens" style={{ textDecoration: "none" }}>
            {" "}
            Women{" "}
          </Link>
          {active === "Women" ? <hr /> : ""}
        </li>
        <li id="Kids" onClick={() => setActive("Kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            {" "}
            Kids{" "}
          </Link>
          {active === "Kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
