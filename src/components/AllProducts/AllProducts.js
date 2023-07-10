import React from "react";
import Products from '../Products/Products';
import './AllProducts.css';

const slider = document.getElementById("mySlider");


function AllProducts(){
    return(
    <div> 
        <div className="currentRoute">
            <a className="routeHome" href="/">
                <span className="spanRoute">
                    <p className="home">Home</p>
                </span>
            </a> 
            <span class="material-symbols-outlined">
                arrow_forward_ios
            </span>
            <span className="spanRoute" >
                All Products
            </span>
        </div>
        <div className="productsCategoryContainer">
            <div className="category">
                <h2 className="exploreBy">Explore by</h2>
                <a href="./" className="tagCategory">
                    All Products
                </a>
                <a href="./" className="tagCategory">
                    Processors
                </a>
                <a href="./" className="tagCategory">
                    Graphic Cards
                </a>
                <h2 className="exploreBy">Filter by</h2>
                <a href="./" className="tagCategory">
                    Price
                </a>
                <div className="slider-container">
                    <input type="range" min="0" max="100" value="50" className="slider" id="mySlider" />
                </div>

            </div>
            <div className="All">
                <div className="selectCategory">
                    <button ><span>Select by:</span></button>
                </div>
                <div className="productsContainer">
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                    <div>
                        <Products/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}


export default AllProducts;

