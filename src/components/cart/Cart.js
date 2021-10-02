import './Cart.css'
import React from 'react';

const Cart = (props) => {
  // console.log(props.cart);
    let {cart}= props;

    let total= 0;
    let totalQuantity=0;
    for (const product of cart) {
        if(!product.quantity){
            product.quantity=1;
        }

        total=total+product.price*product.quantity;
        totalQuantity=totalQuantity+product.quantity;
       
        
    }

    // const totalreducer=(pervious,product)=>(pervious + product.price)*product.quantity;
    // const total=cart.reduce(totalreducer,0);

    const shipping=total>0?15:0;
    const tax= (total+shipping)*.15;
    const totalPrice=total+shipping+tax;

    return (
        <div>
            <h3>Order Summery</h3>
            <h4>Item Add: {totalQuantity} </h4>
            <h3>Price: {total.toFixed(2)}</h3>
            <h3>Shipping: {shipping}</h3>
            <h3>Tax: {tax.toFixed(2)}</h3>
            <h2>Total: {totalPrice.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;