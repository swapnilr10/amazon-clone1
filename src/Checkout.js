import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{basket}, dispatch] = useStateValue() ;

    return (
        <div className = 'checkout_div'>
            <div className = 'checkout'>
                <div className = 'checkout_left'>
                    <div>
                      <h2 className = 'checkout_title'>Shopping Cart</h2>
                  
                       {basket.map(item => (
                          <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                          />
                       ))}
                
                    </div>
                </div>
            </div>
            <div className = 'checkout_right'>
                <img className = 'checkout_image' src = "https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"/>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
