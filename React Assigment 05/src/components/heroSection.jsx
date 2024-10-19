import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS

function HeroSection() {
    const slides = [
        {
            image: 'https://img.freepik.com/premium-photo/person-with-red-heart-their-chest-stands-against-black-background_337384-110622.jpg?ga=GA1.1.548151058.1726835577&semt=ais_hybrid',
            title: 'Welcome to Online Shop',
            subtitle: 'Discover a wide range of products at unbeatable prices',
            buttonText: 'Shop Now',
            buttonLink: '/products'
        },
        {
            image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SGlnaCUyMFF1YWxpdHklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D',
            title: 'High Quality Products',
            subtitle: 'Experienced With Next Level Products',
            buttonText: 'Shop Now',
            buttonLink: '/products'
        },
        {
            image: 'https://static.vecteezy.com/system/resources/previews/029/899/733/non_2x/secure-payment-credit-card-icon-with-shield-secure-transaction-stock-illustration-vector.jpg',
            title: 'Secure Payment',
            subtitle: 'Your transactions are safe with us',
            buttonText: 'Learn More',
            buttonLink: '/secure-payment'
        },
        {
            image: 'https://www.shutterstock.com/image-illustration/free-delivery-service-logo-badge-260nw-2257568177.jpg',
            title: 'Fast Shipment',
            subtitle: 'Get your orders delivered quickly',
            buttonText: 'Track Order',
            buttonLink: '/fast-shipment'
        },
        {
            image: 'https://www.shutterstock.com/image-vector/easy-returns-sign-label-delivery-260nw-2226702705.jpg',
            title: 'Easy Return',
            subtitle: 'Hassle-free returns within 30 days',
            buttonText: 'Return Policy',
            buttonLink: '/easy-return'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMEzYd3dJCWlfW7_q9p8NtOeWegXC3nMXNw&s',
            title: '24/7 Support',
            subtitle: 'We are here to help you anytime',
            buttonText: 'Contact Us',
            buttonLink: '/support'
        }
    ];

    return (
        <section className="relative">
            <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                stopOnHover={true}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-96 bg-center bg-cover" style={{ backgroundImage: `url(${slide.image})` }}>
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
    );
}

export default HeroSection;
