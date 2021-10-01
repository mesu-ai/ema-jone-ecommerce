import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import Cart from '../cart/Cart';
import { addtoLocalStorage, getStoredFromCart } from '../../utilities/LocalStorage';



const Shop = () => {

    const [products,setproducts]=useState([]);
    const [cart,setcart]=  useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data));

    },[]);

    useEffect(()=>{
       const saveData= getStoredFromCart(); 
       const storedCart=[];
       if(products.length){
       for (const key in saveData) {
         //  console.log(key);
           const addedProduct=products.find(product=> product.key===key);
           if(addedProduct){
             const quantity=  saveData[key];
             addedProduct.quantity=quantity;
             storedCart.push(addedProduct);
             console.log(addedProduct);
           }
           
       }}
       setcart(storedCart);
    },[products]);

    const handleAddtoCart=(product)=>{
        const newCart=[...cart,product];
        setcart(newCart);
       // console.log(product);

        addtoLocalStorage(product.key);

    }


    return (
        <div className="shop-container">
            <div className="product-container">
                
                {products.map(product=>
                <Product key={product.key} product={product} handleAddtoCart={handleAddtoCart}></Product>
                )}
                

            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>


            </div>

            
        </div>
    );
};

export default Shop;