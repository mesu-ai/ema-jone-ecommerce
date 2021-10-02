import React from 'react';
import { removeFromLocalStorage } from '../../utilities/LocalStorage';
import Cart from '../cart/Cart';
import useCart from '../hooks/UseCart';
import useProducts from '../hooks/UseProducts';
import OrderItem from '../orderItem/OrderItem';

const OrderReview = () => {

   const [products]= useProducts();
   const [cart,setCart]=useCart(products);


   const removeHandler=key=>{

        const newCart=cart.filter(product=>product.key !==key);
        setCart(newCart);
        removeFromLocalStorage(key)

   }


   
    return (
        <div className="shop-container">
            
            <div className="product-container">
            
            {cart.map(product=><OrderItem key={product.key} product={product} removeHandler={removeHandler}></OrderItem>)}
            
            </div>

            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;