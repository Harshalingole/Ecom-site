import React, { useState } from "react";
import "./navbar.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartAry = useSelector((state) => state.cart.cartArray);
  // console.log(cartAry);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-logo">
          <h2>
            <span> W</span>ebsite
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "navbar-menu mobile-navbar-menu" : "navbar-menu"
          }
        >
          <ul>
            <li>
              <Link to="/Hat">Hats</Link>
            </li>
            <li>
              <Link to="/jacket">Jackets</Link>
            </li>
            <li>
              <Link to="/shoe">Shoes</Link>
            </li>
            <li>
              <a href="#">Tops</a>
            </li>
          </ul>
        </div>

        <div className="navbar-media">
          <ul className="media">
            <li>
              <Link to="/signin" className="login">
                SignIn
              </Link>
            </li>
            <li>
              <Link to="/signup" className="signup">
                SignUp
              </Link>
            </li>
            <li>
              <Link to="/cartpage" className="cartpage">
                <AiOutlineShoppingCart className="cart" />
                <span>{cartAry.length}</span>
              </Link>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
