import './Product.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { removeFromLocalStorage } from '../../utilities/LocalStorage';



const Product = (props) => {
   // console.log(props);

   const {img,name,seller,stock,price,star}=props.product;
   const element = <FontAwesomeIcon icon={faShoppingCart} />

   const handleRemoveFromCart=()=>{
       removeFromLocalStorage(props.product.key);
   }

    return (
        <div className="product">


            <h4>{name}</h4>
            <h5>by: {seller}</h5>

            <div className="product-details">
           
            <div>
                <img src={img} alt="" />
            </div>
            
            <div>  
                <h3>$ {price}</h3>
                <p>Only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handleAddtoCart(props.product)}>{element}  Add to Cart</button>

                <button onClick={handleRemoveFromCart} >Remove From Cart</button>

            </div>

            <div>
                
                <p>{star}</p>
                <h4>Feature </h4>  
            </div>
            </div>
            

            
        </div>
    );
};

export default Product;