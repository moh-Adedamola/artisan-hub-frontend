import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleAboutClick = () => {
        navigate('/about');
    };
    const handleHomePageClick = () => {
        navigate('/');
    };
    const handleFeaturesClick = () => {
        navigate('/');
    };
    const handlePricingClick = () => {
        navigate('/');
    };
    const handleContactClick = () => {
        navigate('/contact');
    };



    return (
        <footer className="bg-[#00163d] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-lg font-semibold mb-2">About Us</h2>
                        <div onClick={handleAboutClick} className='text-white hover:text-blue-300 cursor-pointer mb-2'>
                            About us
                        </div>
                        <p className="text-white">
                            ARTISANHUB.
                        </p>
                    </div>


                    <div>
                        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                        <ul>
                            <li className="mb-1"><a onClick={handleHomePageClick} className="text-white hover:text-blue-300">Home</a></li>
                            <li className="mb-1"><a onClick={handleFeaturesClick} className="text-white hover:text-blue-300">Features</a></li>
                            <li className="mb-1"><a onClick={handlePricingClick} className="text-white hover:text-blue-300">Pricing</a></li>
                            <li className="mb-1"><a onClick={handleContactClick} className="text-white hover:text-blue-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-blue-300"><FaFacebook size="1.5em" /></a>
                            <a href="#" className="text-white hover:text-blue-300"><FaTwitter size="1.5em" /></a>
                            <a href="#" className="text-white hover:text-blue-300"><FaInstagram size="1.5em" /></a>
                        </div>
                    </div>
                </div>


                <div className="text-center text-white mt-8">
                    Copyright &copy; 2024 All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
