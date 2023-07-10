import React from "react";
import "./NavBar.css"
import svgLogo from '/Users/julia/Desktop/Visual/Bootcamp/Shop-main/Shop-main/src/images/logo.svg'
//#1EA8C3 color azul
  

function NavBar(props){
    return(
        <nav className="navBar">
            <img id="logo" src={svgLogo} alt="logo"></img>
            <div className="navBarLinks">
                <a className="btn home" href="./">Home</a>
                <a className="btn products" href="./">Products</a>
                <a className="btn contact" href="./">Contact Us</a>
                <a className="btn policis" href="./">Policies</a>
            </div>
            <div className="cartIconContainer">
            <button className="shoppingCart">
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
            </button>
            </div>
        </nav>
    );
};

export default NavBar;