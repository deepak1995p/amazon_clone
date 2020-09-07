import React from 'react'
import './Home.css'
import HomeImage from './home_image.jpg'
import Backpack from './assets/backpack2.jpg'
import camera from './assets/sonycamera.jpg'
import washingMachine from './assets/washing_machine.jpg'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home_image"
                src={HomeImage}
                alt="prime_image"
            />

            {/* Product id, title,price,rating,image */}
            <div className="home_row">
                <Product
                    id="123456"
                    title="Samsung 6.0 Kg Fully-Automatic 5 Star Front Loading Washing Machine (WW60R20GLMA/TL, White)"
                    price={12000}
                    rating={5}
                    image={washingMachine}
                />
                <Product
                    id="123456"
                    title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
                    price={12000}
                    rating={5}
                    image={Backpack}
                />
            </div>
            <div className="home_row">
                <Product
                    id="123456"
                    title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"
                    price={12000}
                    rating={5}
                    image={camera}
                />
                <Product
                    id="123456"
                    title="Samsung 6.0 Kg Fully-Automatic 5 Star Front Loading Washing Machine (WW60R20GLMA/TL, White)"
                    price={12000}
                    rating={5}
                    image={washingMachine}
                />
                <Product
                    id="123456"
                    title="Samsung 6.0 Kg Fully-Automatic 5 Star Front Loading Washing Machine (WW60R20GLMA/TL, White)"
                    price={12000}
                    rating={5}
                    image={washingMachine}
                />
            </div>
            <div className="home_row">
                <Product
                    id="123456"
                    title="Samsung 6.0 Kg Fully-Automatic 5 Star Front Loading Washing Machine (WW60R20GLMA/TL, White)"
                    price={12000}
                    rating={5}
                    image={washingMachine}
                />
            </div>
        </div>
    )
}

export default Home
