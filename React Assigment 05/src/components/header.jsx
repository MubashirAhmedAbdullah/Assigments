import { Image, Input, Button } from "antd";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'

function Header() {
    const isLoggedIn = false

    const navigate = useNavigate();
    return (
        <header className="bg-gray-800 shadow-md">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">

                <div className="flex items-center gap-4">
                    <Image
                        preview={true}
                        height={50}
                        width={50}
                        src="https://marketplace.canva.com/EAF6ICBwJ7U/1/0/1600w/canva-blue-and-white-circle-retail-logo-jWnP4G7rjfI.jpg"
                        className="logo rounded-full"
                    />
                    <Link to={'/'}><span className="titleName text-white font-bold text-2xl">Online Shop</span></Link>
                </div>


                <div className="flex-1 mx-6">
                    <Input
                        placeholder="Search for products"
                        suffix={<SearchOutlined style={{ fontSize: '18px' }} />}
                        className="searchBar rounded-full"
                    />
                </div>


                <nav className="flex items-center gap-2">
                    <ul className="flex items-center gap-3 text-white">
                        <Link to={'/'}><li className="hover:text-gray-300 transition duration-300">Home</li></Link>
                        <Link to={'/products'}><li className="hover:text-gray-300 transition duration-300">Products</li></Link>
                        {isLoggedIn ? (<Link to={'/profile'}><Button
                            type="text"
                            className="text-white hover:text-gray-300 transition duration-300"
                        >
                            <UserOutlined style={{ fontSize: '24px' }} />
                        </Button></Link>) : <li className="hover:text-gray-300 transition duration-300 cursor-pointer" onClick={() => navigate('/Auth')}>Login</li>}
                    </ul>
                   <Link to={'/cart'}> <Button
                        type="text"
                        className="text-white hover:text-gray-300 transition duration-300"
                    >
                        <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                    </Button></Link>
                </nav>

                {/* <nav className="flex items-center gap-4">
                    <ul className="flex items-center gap-4 text-white">
                        <Link to={'/'}><li className="hover:text-gray-300 transition duration-300">Home</li></Link>
                        <Link to={'/products'}><li className="hover:text-gray-300 transition duration-300">Products</li></Link>
                        {isLoggedIn ? (<Link to={'/profile'}><li className="text-white hover:text-gray-300 transition duration-300"><UserOutlined style={{ fontSize: '24px' }} /></li></Link>, <Link to={'/cart'}><li className="text-white hover:text-gray-300 transition duration-300"><ShoppingCartOutlined style={{ fontSize: '24px' }} /></li></Link>)
                            : <li className="hover:text-gray-300 transition duration-300 cursor-pointer" onClick={() => navigate('/Auth')}>Login</li>
                        }
                    </ul>
                </nav> */}
            </div>
        </header>
        
    );
}

export default Header;
