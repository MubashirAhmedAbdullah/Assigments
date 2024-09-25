import { AppstoreOutlined, RocketOutlined, CustomerServiceOutlined, SafetyOutlined, ReloadOutlined, TagOutlined } from '@ant-design/icons';


const Features = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <div className="flex justify-center mb-4 text-blue-500">
                                <AppstoreOutlined style={{ fontSize: '48px' }} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">High Quality Products</h3>
                            <p className="text-gray-600">We offer only the best products that meet stringent quality standards.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <div className="flex justify-center mb-4 text-blue-500">
                                <RocketOutlined style={{ fontSize: '48px' }} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                            <p className="text-gray-600">Our efficient delivery system ensures you receive your orders swiftly.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <div className="flex justify-center mb-4 text-blue-500">
                                <CustomerServiceOutlined style={{ fontSize: '48px' }} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                            <p className="text-gray-600">We provide round-the-clock support to assist you with any inquiries.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <div className="flex justify-center mb-4 text-blue-500">
                                <SafetyOutlined style={{ fontSize: '48px' }} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                            <p className="text-gray-600">Your transactions are protected with top-notch security measures.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <div className="flex justify-center mb-4 text-blue-500">
                                <ReloadOutlined style={{ fontSize: '48px' }} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                            <p className="text-gray-600">Our hassle-free return policy makes it easy to return products.</p>
                        </div>
                        <div className="p-6 bg-white shadow-md rounded-lg">
                            <div className="flex justify-center mb-4 text-blue-500">
                                <TagOutlined style={{ fontSize: '48px' }} />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Exclusive Discounts</h3>
                            <p className="text-gray-600">Enjoy special discounts and offers available only to our members.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Features;