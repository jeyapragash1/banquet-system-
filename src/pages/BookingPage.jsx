import React from 'react';
import { LuCalendarCheck, LuUsers, LuSparkles } from 'react-icons/lu';

// Import your booking page image
import bookingInfoImg from '../assets/images/15.jpeg';

const GradientText = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-[#f72585] via-[#7367f0] to-[#4cc9f0] bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

const BookingPage = () => {
    return (
        <div className="bg-gradient-to-br from-white via-purple-50 to-blue-100 animate-gradient-background" style={{ backgroundSize: '400% 400%' }}>
            <div className="container mx-auto px-6 py-24">
                <div className="max-w-6xl mx-auto bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-10">
                    {/* Left Side: Form (7 columns) */}
                    <div className="lg:col-span-6 p-8 md:p-12">
                        <div className="text-left mb-10">
                            <h1 className="text-4xl md:text-5xl font-black mb-3">
                                Your <GradientText>Unforgettable Event</GradientText> Starts Here
                            </h1>
                            <p className="text-lg text-gray-600">Fill out the form to inquire about your date. We'll get back to you within 24 hours!</p>
                        </div>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="name" className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition" placeholder="John Doe"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition" placeholder="you@example.com"/>
                                </div>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-1">Preferred Event Date</label>
                                    <input type="date" id="eventDate" className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition"/>
                                </div>
                                <div>
                                    <label htmlFor="timeSlot" className="block text-sm font-semibold text-gray-700 mb-1">Time Slot</label>
                                    <select id="timeSlot" className="block w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-secondary focus:border-secondary transition">
                                        <option>Select a time</option>
                                        <option>Morning (9 AM - 2 PM)</option>
                                        <option>Afternoon (3 PM - 8 PM)</option>
                                        <option>Evening (6 PM - 11 PM)</option>
                                    </select>
                                </div>
                            </div>
                             <div>
                                <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-1">Estimated Number of Guests</label>
                                <input type="number" id="guests" className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary transition" placeholder="e.g., 150"/>
                            </div>
                            <div className="text-center pt-6">
                                <button type="submit" className="bg-gradient-to-r from-[#f72585] to-[#7367f0] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl hover:shadow-[#7367f0]/50 transition-all transform hover:scale-105 duration-300 inline-block">
                                    Send Inquiry
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Info & Image (4 columns) */}
                    <div className="lg:col-span-4 bg-cover bg-center p-12 flex flex-col justify-between text-white" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${bookingInfoImg})` }}>
                        <div>
                            <h3 className="text-3xl font-bold mb-6">What Happens Next?</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <LuCalendarCheck className="w-8 h-8 flex-shrink-0 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold">1. We Check Availability</h4>
                                        <p className="text-gray-200">Our team will instantly check your preferred date and time slot.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <LuUsers className="w-8 h-8 flex-shrink-0 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold">2. Personal Consultation</h4>
                                        <p className="text-gray-200">An event planner will contact you to discuss your vision and details.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <LuSparkles className="w-8 h-8 flex-shrink-0 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold">3. Create Your Magic</h4>
                                        <p className="text-gray-200">We'll finalize the plan and lock in your date to create an unforgettable event.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/20 text-center">
                            <p className="font-bold">Pearl Hall - Where Memories Are Made</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;