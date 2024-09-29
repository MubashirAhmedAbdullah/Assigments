import Features from "../components/features";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import ProductCard from "../components/productCard";



function Home() {
    return (
        <div className=" h-screen">
            <HeroSection />
            <div className="bg-gray-100 pt-10">
                <h1 className="text-3xl font-bold mb-12 text-center">
                    Our Best Products
                </h1>
                <div className="flex flex-wrap p-5 gap-2">
                
                </div>
            </div>
            <Features />

            <Footer />

        </div>
    )
}


export default Home;