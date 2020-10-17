import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutImg from './assets/checkout_img.JPG'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout_ad"
                src={CheckoutImg}
                alt="checkout"
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>your cart is empty</h2>
                    <p>you have no items in your basket. To buy one or more items, click "Add to basket" to the item</p>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout_title">your cart is here</h2>

                        {basket?.map((item) =>{
                            console.log('item--->>>>',item)
                            return(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            );
                        })}
                    </div>
                )}

        </div>
    )
}

export default Checkout
