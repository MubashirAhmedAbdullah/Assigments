import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faEnvelope,faStar,faTruckFast } from '@fortawesome/free-solid-svg-icons'





function Features() {
    return (
        <>
            <section id="features" className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">Our Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 border rounded">
                            <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                            <p>We ensure quick and safe delivery of your products.</p>
                            <FontAwesomeIcon className="h-10 mt-5" icon={faTruckFast} />
                        </div>
                        <div className="p-6 border rounded">
                            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                            <p>Our support team is available around the clock.</p>
                            <FontAwesomeIcon className="h-10 mt-5" icon={faCalendarDays} />

                        </div>
                        <div className="p-6 border rounded">
                            <h3 className="text-xl font-bold mb-2">Best Quality</h3>
                            <p>We provide top-notch quality products at great prices.</p>
                            <FontAwesomeIcon className="h-10 mt-5" icon={faStar} />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Features;