import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Hero() {
    return (
        <>
            <section id="home" className="bg-gray-100 py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Online Order</h1>
                        <p className="mb-8">Find the best products at the most affordable prices.</p>
                        <Link className="bg-blue-500 text-white py-2 px-4 rounded" to={"/products"}>Shop Now</Link>
                    </div>
                    <div className="md:w-1/2">
                        <img src="https://plus.unsplash.com/premium_photo-1664201890375-f8fa405cdb7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shopping" />
                    </div>
                </div>
            </section>
        </>
    )
}



export default Hero;