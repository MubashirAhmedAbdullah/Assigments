


function Login() {
    return (
        <>
            {/* <h1 className="text-center text-4xl underline font-bold">
            Login
        </h1> */}

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Sign In</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-yellow-500" />
                                <span className="ml-2 text-gray-700">Remember Me</span>
                            </label>
                            <a href="#" className="text-sm text-yellow-500 hover:underline">Forgot Password?</a>
                        </div>
                        <button className="w-full bg-yellow-500 text-white font-bold py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-6">
                        Don't have an account? <a href="#" className="text-yellow-500 hover:underline">Sign Up</a>
                    </p>
                </div>
            </div>
        </>
    )
}


export default Login;