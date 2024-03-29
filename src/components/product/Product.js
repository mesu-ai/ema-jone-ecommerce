import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Feature from '../feature/Feature';



const Product = (props) => {
   // console.log(props);

   const {img,name,seller,stock,price,star,features}=props.product;
   const element = <FontAwesomeIcon icon={faShoppingCart} />


   const textStyle={
    paddingTop:'0px',
    paddingBottom:'0px',
    marginTop:'0px',
    marginBottom:'0px'
}

    return (
        
        
            <div className="product-details product">
           
            <div>
                <img src={img} alt="" />
            </div>
            
            <div >

                <div style={{textAlign:'left',marginLeft:'20px'}}>
                    <h4 >{name}</h4>
                    <h5 style={textStyle}>by: {seller}</h5>

                </div>

                <div className="product">
        
                    <div>

                        <h3 style={textStyle}>$ {price}</h3>
                        <p>Only {stock} left in stock - order soon</p>
                        <button onClick={()=>props.handleAddtoCart(props.product)}>{element}  Add to Cart</button>

                    </div>

                    <div>
                        <p>{star}</p>
                        <h3 style={textStyle}>Feature:</h3>
                        <ul>{features.map(feature=> <li><Feature key={Math.random()} feature={feature}></Feature></li>)}</ul>  
                    </div>
                </div>

            </div>

            </div>
            
    );
};

export default Product;