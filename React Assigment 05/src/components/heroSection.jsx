import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="relative h-96 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/person-with-red-heart-their-chest-stands-against-black-background_337384-110622.jpg?ga=GA1.1.548151058.1726835577&semt=ais_hybrid)'}}>
            <div className="container mx-auto h-full text-white flex flex-col justify-center items-start px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Online Shop</h1>
                <p className="text-lg md:text-2xl mb-6">Discover a wide range of products at unbeatable prices</p>
                <Link to={'/products'}><Button type="primary" size="large" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold">Shop Now</Button></Link>
            </div>
        </section>
    );
}

export default HeroSection;
