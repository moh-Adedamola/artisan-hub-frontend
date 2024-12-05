import React, {useState} from 'react';
import {FaTachometerAlt, FaChartPie, FaSignOutAlt, FaUser} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";

const Sidebar = () => {
    const navigate = useNavigate();
    

    const handleProfileFormClick = () => {
        navigate('/profile-form');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };
    const handleReviewsClick = () => {
        navigate('/profile');
    };


    const handleLogoutClick = () => {
        navigate('/logout');
    };
    const handleBackClick = () => {
        navigate('/login')
    }
    return (
        <div className="pt-16 bg-white w-64 min-h-screen p-4 shadow-md md:10">

            <div className="flex flex-col items-center mb-8">
                
           
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a onClick={handleProfileFormClick}
                       className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                    <a onClick={handleProfileFormClick}
                       className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Edit Profile</a>
                </div>
            </div>


            <nav className="flex flex-col">
                <a onClick={handleProfileClick}
                   className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaUser/> <span>Profile</span>
                </a>

                <a onClick={handleReviewsClick}
                   className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaChartPie/> <span>Reviews</span>
                </a>
                <a onClick={handleLogoutClick} className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaSignOutAlt/> <span>Logout</span>
                </a>
                    <a onClick={handleBackClick} className="flex items-center space-x-3 p-2 hover:bg-gray-200 rounded-lg">
                        <HiArrowLeft/> <span>Back</span>
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;