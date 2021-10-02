import React from 'react';
import { removeFromLocalStorage } from '../../utilities/LocalStorage';
import Feature from '../feature/Feature';

const OrderItem = (props) => {
    // console.log(props.product);
    const {img,name,seller,quantity,stock,price,features,key}=props.product;
    const {removeHandler} =props;

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
                        
                        <button onClick={()=>removeHandler(key)}>Remove From Cart</button>

                    </div>

                    <div>
                        <p>Ordered Quantity: {quantity}</p>
                        <h3 style={textStyle}>Feature:</h3>
                        <ul>{features.map(feature=> <li><Feature key={Math.random()} feature={feature}></Feature></li>)}</ul>  
                    </div>
                </div>

            </div>

            </div>
    );
};

export default OrderItem;