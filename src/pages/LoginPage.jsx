import React from 'react';
import { LuUser, LuLock } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Pearl <span className="text-secondary">Hall</span>
                    </h1>
                    <p className="text-gray-400 mt-2">Admin Panel Login</p>
                </div>

                <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl shadow-2xl">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                                Username
                            </label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <LuUser />
                                </span>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="pl-10 block w-full py-3 px-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                    placeholder="Enter your username"
                                    autoComplete="username"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" class="block text-sm font-medium text-gray-300 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <LuLock />
                                </span>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="pl-10 block w-full py-3 px-4 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-500 bg-gray-600 text-secondary focus:ring-secondary" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div>
                            {/* In a real app, this button would be a type="submit" */}
                            <Link
                                to="/admin/dashboard"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-secondary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-secondary transition-all"
                            >
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;