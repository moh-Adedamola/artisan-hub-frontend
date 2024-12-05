import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const SignupPage = () => {
    const [form, setForm] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        address: '',
        rolesUser: 'WORKMANSHIP',
        agree: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validateForm = () => {
        const formErrors = {};
        if (form.password !== form.confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match";
        }
        if (!form.agree) {
            formErrors.agree = "You must agree to the terms and conditions";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/registerAsWorkmanship', {
                name: form.name,
                userName: form.userName,
                email: form.email,
                password: form.password,
                phoneNumber: form.phoneNumber,
                address: form.address,
                rolesUser: form.rolesUser,
            });

            if (response.data.successful) {
                toast.success('Signup successful!');
                setTimeout(() => navigate("/login"), 3000);
            } else {
                toast.error(response.data.message || 'Signup failed.');
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#eeffff]">
            <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full Name"
                        fullWidth
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        className="mb-4"
                    />
                    <TextField
                        label="Username"
                        fullWidth
                        name="userName"
                        value={form.userName}
                        onChange={handleChange}
                        error={!!errors.userName}
                        helperText={errors.userName}
                        className="mb-4"
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        className="mb-4"
                    />
                    <TextField
                        label="Password"
                        fullWidth
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={form.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        className="mb-4"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <HiEyeOff /> : <HiEye />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        label="Confirm Password"
                        fullWidth
                        name="confirmPassword"
                        type="password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        className="mb-4"
                    />
                    <TextField
                        label="Phone Number"
                        fullWidth
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber}
                        className="mb-4"
                    />
                    <TextField
                        label="Address"
                        fullWidth
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        error={!!errors.address}
                        helperText={errors.address}
                        className="mb-4"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="agree"
                                checked={form.agree}
                                onChange={handleChange}
                                color="primary"
                            />
                        }
                        label="I agree to the terms and conditions"
                    />
                    {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={isLoading}
                        className="mt-6"
                    >
                        {isLoading ? 'Signing Up...' : 'Sign Up'}
                    </Button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SignupPage;
