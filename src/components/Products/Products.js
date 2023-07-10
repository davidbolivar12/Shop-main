import React from "react";
import './Products.css';

function Products (props){
    return(
        <div className="ProductContainer">
            <div className="card">
                <a className="tagA" href={props.details}>
                    <img src="https://static.wixstatic.com/media/361ccc_4d849af2488a470798f83062c8b34f49~mv2.webp" alt="" />
                </a> 
            </div>
            <div className="info">
                <p>{props.info}</p>
                <p>Price: ${props.precio}</p>
            </div>
        </div>
    )
}

export default Products;