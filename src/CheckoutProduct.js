import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({id, title, image, price, rating}) {
    
    return (
        <div className="chckoutProduct">
           <img src = {image} alt= "image"/>
           <div className= "checkoutProduct_info">
              <p className="checkoutProduct_title">{title}</p>
              <p className="checkoutProduct_price">
                <small>₹</small>
                <strong>{price}</strong>
              </p>
              <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐️</p>
                        ))}
                </div>
                <button>Remove from basket</button>
           </div>
        </div>
    )
}

export default CheckoutProduct