import React from "react";
import "./NavBar.css"
import svgLogo from '/Users/julia/Desktop/Visual/Bootcamp/Shop-main/Shop-main/src/images/logo.svg'
//#1EA8C3 color azul
  

function NavBar(props){
    return(
        <nav className="navBar">
            <img id="logo" src={svgLogo} alt="logo"></img>
            <div className="navBarLinks">
                <a id="btn home" href="./">Home</a>
                <a id="btn products" href="./">Products</a>
                <a id="btn contact" href="./">Contact Us</a>
                <a id="btn policis" href="./">Policies</a>
            </div>
            <div className="cartIconContainer">
            <button className="shoppingCart">
                <span class="material-symbols-outlined">
                    shopping_cart
                </span>
            </button>
            </div>
        </nav>
    );
};

export default NavBar;