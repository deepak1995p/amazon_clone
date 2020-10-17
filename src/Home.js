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
                    id="123455"
                    title="Samsung 6.0 Kg Fully-Automatic 5 Star Front Loading Washing Machine (WW60R20GLMA/TL, White)"
                    price={12000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61JkCI7uuYL._SL1335_.jpg"
                />
                <Product
                    id="123456"
                    title="American Tourister 32 Ltrs Black Casual Backpack (AMT FIZZ SCH BAG 02 - BLACK)"
                    price={12000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ETx%2BGyunL._SL1100_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="123457"
                    title="Sony DSC W830 Cyber-Shot 20.1 MP Point and Shoot Camera (Black) with 8X Optical Zoom"
                    price={12000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71BE%2BwLmJCL._SL1408_.jpg"
                />
                <Product
                    id="123458"
                    title="Cello GNM_Elite Mixer Grinder, 500W, 3 Stainless Steel Jar and 1 Juicer Jar (Blue)"
                    price={12000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EH7wC%2Bs-L._SL1500_.jpg"
                />
                <Product
                    id="123459"
                    title="HUAWEI Y9s (Breathing Crystal, 6GB RAM, 128GB Storage, Ultra FullView Display, 48MP AI Triple Camera, Side-Mounted Fingerprint, 4000mAH Powerfull Battery"
                    price={12000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61yERfK2vHL._SL1024_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="123460"
                    title="MuveAcoustics Impulse Wired On-Ear Headphones with Microphone (Flagship Blue)"
                    price={12000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81yCr3INE3L._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
