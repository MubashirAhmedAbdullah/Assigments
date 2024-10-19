import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductsHeroSection() {


    const productSlides = [
        {
            image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGlnaCUyMFF1YWxpdHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D',
            title: 'Best Quality Products',
            subtitle: 'Top quality at unbeatable prices',
            buttonText: 'View Details',
            buttonLink: '/product-1'
        },
        {
            image: 'https://images.unsplash.com/photo-1599660589127-1196c9f4a24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHByb2R1Y3R8ZW58MHx8fHwxNjY1NjU1MjI5&ixlib=rb-1.2.1&q=80&w=1080',
            title: 'Exclusive Product 2',
            subtitle: 'Best in class features',
            buttonText: 'View Details',
            buttonLink: '/product-2'
        },
        {
            image: 'https://images.unsplash.com/photo-1599660667846-22c49312db27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHByb2R1Y3R8ZW58MHx8fHwxNjY1NjU1MjUw&ixlib=rb-1.2.1&q=80&w=1080',
            title: 'Best Deal 1',
            subtitle: 'Get it while it lasts!',
            buttonText: 'Shop Now',
            buttonLink: '/deal-1'
        },
        {
            image: 'https://t3.ftcdn.net/jpg/04/22/68/96/360_F_422689692_woPcImWb4UA2ZboLOGEBNpMGVn1RiLRU.jpg',
            title: 'Best Deal 2',
            subtitle: 'Limited time offer!',
            buttonText: 'Shop Now',
            buttonLink: '/deal-2'
        },
        {
            image: 'https://images.unsplash.com/photo-1599660672375-43e0a0a47ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHByb2R1Y3R8ZW58MHx8fHwxNjY1NjU1Mjkw&ixlib=rb-1.2.1&q=80&w=1080',
            title: 'Featured Product',
            subtitle: 'Don’t miss out!',
            buttonText: 'View Details',
            buttonLink: '/featured-product'
        }
    ];

    return (
        <div>
            <section className="relative">
                <Carousel
                    showArrows={true}
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={5000}
                    stopOnHover={true}
                >
                    {productSlides.map((slide, index) => (
                        <div key={index} className="relative h-96 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="container mx-auto h-full text-white flex flex-col justify-center items-start px-6 bg-black bg-opacity-50">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                                <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>
                                <Link to={slide.buttonLink}>
                                    <Button type="primary" size="large" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold">
                                        {slide.buttonText}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </section>
        </div>
    );
}

export default ProductsHeroSection;
