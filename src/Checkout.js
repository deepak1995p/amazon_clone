import React from 'react'
import { useStateValue } from './StateProvider'
import {Camera} from './assets/chair.jpg'

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className= "checkout">
           <img src= {Camera}
               alt= "image"
           />
        </div>
    )
}

export default Checkout
