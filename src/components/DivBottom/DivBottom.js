import React from "react";
import "./DivBottom.css"
// import ProductCarousel from "../ProductCarousel/ProductCarousel";
  

function DivBottom(props){
    return(
        <div className="principalContainer">
            <h2>Explore Our Products</h2>
            <div className="containerText">
                <p>You can browse and consult about each of the characteristics that our products have, and if you have any questions, contact any of our specialized advisors, we assure you that there will be nothing you do not know!</p>
            </div>
                <ProductCarousel/>
            
        </div>
    );
};

export default DivBottom;