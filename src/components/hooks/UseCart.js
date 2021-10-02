import { useEffect, useState } from "react"
import { getStoredFromCart } from "../../utilities/LocalStorage";

const useCart=(products)=>{

    const [cart,setCart]= useState([]);
    useEffect(()=>{
        const saveProduct=getStoredFromCart();
        const storedProduct=[];
        
        if(products.length){
            for(const key in saveProduct){
                const addedProduct=products.find(product=>product.key===key);

                if(addedProduct){
                    const quantity= saveProduct[key];
                    addedProduct.quantity=quantity;

                    storedProduct.push(addedProduct);

                }

            }
             setCart(storedProduct);

        }     

    },[products]);
   
    return [cart,setCart];

}

export default useCart;