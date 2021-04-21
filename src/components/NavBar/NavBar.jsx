import React from "react";
import { Link } from "react-router-dom";
import ".././NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
 

        <ul className="nav justify-content">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              HOME
            </Link>
          </li>

          <li className="nav-item dropdown">
            <button
              className="nav-link  border-0 bg-transparent"
              id="navbarDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              CATEGORIES{" "}
            </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/category/Meal sandwich" className="dropdown-item">
                <p>Meal sandwich</p>
              </Link>
              <Link to="/category/Snack sandwich" className="dropdown-item">
                <p>Snack Sandwich</p>
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              CART
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link" >
              ABOUT US
            </Link>
          </li>
        </ul>

        <CartWidget />
      </nav>
    </div>
  );
}

export default NavBar;
