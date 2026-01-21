import { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react"; // Icons for professional look

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [isSignUp, setIsSignUp] = useState(false);

    // Dynamic Header Text
    const title = isSignUp ? "Create Account" : "Welcome Back";
    const subTitle = isSignUp ? "Join our community today" : "Login to manage your projects";

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="w-full max-w-md z-10 mx-4">
                <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl p-8 transition-all duration-500">
                    
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white tracking-tight">{title}</h1>
                        <p className="mt-2 text-gray-400 text-sm">{subTitle}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field (Only for SignUp) */}
                        {isSignUp && (
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                                />
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                            <input
                                type="email"
                                required
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-500 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full group relative flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl mt-6 transition-all shadow-lg shadow-orange-500/20"
                        >
                            {isSignUp ? "Sign Up" : "Sign In"}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Toggle Link */}
                        <p className="text-center text-gray-400 text-sm mt-6">
                            {isSignUp ? "Already have an account?" : "New here?"} 
                            <span 
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="ml-1 text-orange-500 font-medium cursor-pointer hover:underline"
                            >
                                {isSignUp ? "Login" : "Create Account"}
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;