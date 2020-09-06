import React from 'react'
import './Home.css'
import HomeImage from './try_amazon_prime.jpg'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src=  {HomeImage}
            alt="prime_image"
            />
            
            {/* Product id, title,price,rating,image */}
            <Product
                id="123456"
                title="The Lean Startup: How constant Innovation Creates"
                price={100}
                rating={5}
                image= ""
            />
        </div>
    )
}

export default Home
