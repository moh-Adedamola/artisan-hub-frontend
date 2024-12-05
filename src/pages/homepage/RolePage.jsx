import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiUser, HiArrowLeft } from 'react-icons/hi';

const RoleCard = ({ role, icon, selectedRole, handleRoleSelect, label }) => {
    return (
        <div
            className={`border rounded-lg p-6 cursor-pointer flex flex-col items-center justify-center border-[#093c5e] ${
                selectedRole === role ? 'bg-[#f0f4f8]' : ''
            }`}
            onClick={() => handleRoleSelect(role)}
        >
            {icon}
            <p className="text-lg font-medium">{label}</p>
            <input
                type="radio"
                checked={selectedRole === role}
                onChange={() => handleRoleSelect(role)}
                className="mt-2"
            />
        </div>
    );
};

const RolePage = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const navigate = useNavigate();

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const handleCreateAccount = () => {
        if (!selectedRole) {
            alert('Please select a role before proceeding!');
            return;
        }

        const capitalizedRole = selectedRole.toUpperCase();
        localStorage.setItem('role', capitalizedRole);

        if (selectedRole === 'admin') {
            navigate('/registerAdmin');
        } else if (selectedRole === 'artisan') {
            navigate('/registerArtisan');
        } else if (selectedRole === 'client') {
            navigate('/registerClient');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffffff] relative">
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center text-[#093c5e] hover:text-[#093c5e]"
                >
                    <HiArrowLeft className="mr-2" /> Back
                </button>
            </div>
            <h1 className="text-3xl font-semibold mb-6 text-[#093c5e] hidden sm:block">
                Join as an Admin, Artisan, or Client
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6 p-5">
                <RoleCard
                    role="admin"
                    icon={<HiUser className="text-3xl mb-2" />}
                    selectedRole={selectedRole}
                    handleRoleSelect={handleRoleSelect}
                    label="I'm an Admin"
                />
                <RoleCard
                    role="artisan"
                    icon={<HiUser className="text-3xl mb-2" />}
                    selectedRole={selectedRole}
                    handleRoleSelect={handleRoleSelect}
                    label="I'm an Artisan"
                />
                <RoleCard
                    role="client"
                    icon={<HiUser className="text-3xl mb-2" />}
                    selectedRole={selectedRole}
                    handleRoleSelect={handleRoleSelect}
                    label="I'm a Client"
                />
            </div>
            <button
                className={`px-6 py-3 rounded-lg font-medium ${
                    selectedRole ? 'bg-[#06324e] text-white hover:bg-[#06324e]' : 'bg-[#007e82] cursor-not-allowed'
                }`}
                onClick={handleCreateAccount}
                disabled={!selectedRole}
                aria-disabled={!selectedRole}
            >
            <a href="/signUp" >
                    Create Account
            </a>
            </button>
            <p className="mt-4">
                Already have an account?{' '}
                <a href="/login" className="text-[#06324e] hover:underline">
                    Log In
                </a>
            </p>
        </div>
    );
};

export default RolePage;
