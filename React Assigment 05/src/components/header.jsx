// import { Image, Input } from "antd";
// import { SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import '../App.css';

// function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const isLoggedout = true;
//     const navigate = useNavigate();

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <header className="bg-gray-800 shadow-md">
//             <div className="container mx-auto px-6 py-3 flex items-center justify-between flex-wrap">
//                 <div className="flex items-center gap-4">
//                     <Image
//                         preview={true}
//                         height={50}
//                         width={50}
//                         src="https://marketplace.canva.com/EAF6ICBwJ7U/1/0/1600w/canva-blue-and-white-circle-retail-logo-jWnP4G7rjfI.jpg"
//                         className="logo rounded-full"
//                     />
//                     <Link to={'/'}>
//                         <span className="titleName text-white font-bold text-2xl">Online Shop</span>
//                     </Link>
//                 </div>

//                 <div className="flex-1 mx-6">
//                     <Input
//                         placeholder="Search for products"
//                         suffix={<SearchOutlined style={{ fontSize: '18px' }} />}
//                         className="searchBar rounded-full"
//                     />
//                 </div>

//                 <div className="sm:hidden flex items-center">
//                     <button onClick={toggleMenu} className="text-white focus:outline-none">
//                         {isMenuOpen ? <CloseOutlined style={{ fontSize: '24px' }} /> : <MenuOutlined style={{ fontSize: '24px' }} />}
//                     </button>
//                 </div>

//                 <nav className={`sm:flex items-center gap-2 ${isMenuOpen ? 'block' : 'hidden'} w-full sm:w-auto mt-3 sm:mt-0 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} sm:translate-y-0`}>
//                     <ul className="flex flex-col sm:flex-row items-center gap-3 text-white w-full justify-between sm:justify-end">
//                         <li onClick={() => navigate('/')} className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</li>
//                         <li onClick={() => navigate('products')} className="hover:text-gray-300 transition duration-300 cursor-pointer">Products</li>
//                         {
//                             isLoggedout ? (
//                                 <li onClick={() => navigate('/Auth')} className="hover:text-gray-300 transition duration-300 cursor-pointer">Login</li>
//                             ) : (
//                                 <>
//                                     <li onClick={() => { navigate('/cart') }} className="hover:text-gray-300 transition duration-300 cursor-pointer">
//                                         <ShoppingCartOutlined style={{ fontSize: '24px' }} />
//                                     </li>
//                                     <li onClick={() => { navigate('/profile') }} className="hover:text-gray-300 transition duration-300 cursor-pointer">
//                                         <UserOutlined style={{ fontSize: '24px' }} />
//                                     </li>
//                                 </>
//                             )
//                         }
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default Header;




import { Image, Input } from "antd";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLoggedout = false;
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 shadow-md">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between flex-wrap">
                <div className="flex items-center gap-4">
                    <Image
                        preview={true}
                        height={50}
                        width={50}
                        src="https://marketplace.canva.com/EAF6ICBwJ7U/1/0/1600w/canva-blue-and-white-circle-retail-logo-jWnP4G7rjfI.jpg"
                        className="logo rounded-full"
                    />
                    <Link to={'/'}>
                        <span className="titleName text-white font-bold text-2xl">Online Shop</span>
                    </Link>
                </div>

                <div className="flex-1 mx-6">
                    <Input
                        placeholder="Search for products"
                        suffix={<SearchOutlined style={{ fontSize: '18px' }} />}
                        className="searchBar rounded-full"
                    />
                </div>

                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? <CloseOutlined style={{ fontSize: '24px' }} /> : <MenuOutlined style={{ fontSize: '24px' }} />}
                    </button>
                </div>

                <nav className={`sm:flex items-center gap-2 ${isMenuOpen ? 'block' : 'hidden'} w-full sm:w-auto mt-3 sm:mt-0 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'} sm:opacity-100 sm:translate-y-0`}>
                    <ul className="flex flex-col sm:flex-row items-center gap-3 text-white w-full justify-between sm:justify-end">
                        <li onClick={() => navigate('/')} className="hover:text-gray-300 transition duration-300 cursor-pointer">Home</li>
                        <li onClick={() => navigate('products')} className="hover:text-gray-300 transition duration-300 cursor-pointer">Products</li>
                        {
                            isLoggedout ? (
                                <li onClick={() => navigate('/Auth')} className="hover:text-gray-300 transition duration-300 cursor-pointer">Login</li>
                            ) : (
                                <>
                                    <li onClick={() => { navigate('/cart') }} className="hover:text-gray-300 transition duration-300 cursor-pointer">
                                        <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                                    </li>
                                    <li onClick={() => { navigate('/profile') }} className="hover:text-gray-300 transition duration-300 cursor-pointer">
                                        <UserOutlined style={{ fontSize: '24px' }} />
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
