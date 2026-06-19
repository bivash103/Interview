import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { AppContext } from '../context/AppContext';

const Login = ({ close }) => {   // 👈 ACCEPT close() from Hero

    const navigate = useNavigate();
    const [state, setState] = useState("login");

    const BASE_URL = import.meta.env.VITE_API_URL;


    // ⬅️ FIX: use login() instead of setToken for cleaner API
    const { login } = useContext(AppContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${BASE_URL}/api/user/${state === "login" ? "login" : "signup"}`,
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                }
            );

            const data = response.data;

            if (data.success) {
                // ⬅️ CORRECT: use AppContext login() so UI updates instantly
                login(data.token);
                toast.success(data.message);
                close();        // 👈 AUTO CLOSE POPUP
                navigate("/");  // redirect to home
            } 
            else {
                toast.error(data.message);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
        >
            <h1 className="text-gray-900 text-3xl mt-10 font-medium">
                {state === "login" ? "Login" : "Sign up"}
            </h1>

            <p className="text-gray-500 text-sm mt-2">
                Please sign in to continue
            </p>

            {/* NAME (only in signup) */}
            {state !== "login" && (
                <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="border-none outline-none ring-0"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
            )}

            {/* EMAIL */}
            <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <input
                    type="email"
                    name="email"
                    placeholder="Email id"
                    className="border-none outline-none ring-0"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* PASSWORD */}
            <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border-none outline-none ring-0"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mt-4 text-left text-indigo-500">
                <button type="reset" className="text-sm">Forget password?</button>
            </div>

            <button
                type="submit"
                className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
                {state === "login" ? "Login" : "Sign up"}
            </button>

            <p
                onClick={() => setState(prev => prev === "login" ? "register" : "login")}
                className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer"
            >
                {state === "login" ? "Don't have an account?" : "Already have an account?"}
                <span className="text-indigo-500 ml-1">click here</span>
            </p>
        </form>
    );
};

export default Login;
