import React from 'react';
import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu';

// Import your contact page image
import contactHeroImg from '../assets/images/18.jpg';

const GradientText = ({ children, className = '' }) => (
  <span className={`bg-gradient-to-r from-[#f72585] via-[#7367f0] to-[#4cc9f0] bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

const ContactPage = () => {
    return (
        <div className="bg-gradient-to-br from-white via-purple-50 to-blue-100 animate-gradient-background" style={{ backgroundSize: '400% 400%' }}>
            {/* Hero Section */}
            <section className="relative py-32 bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(to right, rgba(115,103,240,0.8), rgba(247,37,133,0.7)), url(${contactHeroImg})` }}>
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-black drop-shadow-lg animate-fadeInDown">Let's Create Something Beautiful</h1>
                    <p className="text-xl mt-4 max-w-2xl mx-auto drop-shadow-md animate-fadeInUp" style={{ animationDelay: '0.2s' }}>We're here to answer any questions and help you plan your perfect event.</p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left Side: Contact Form */}
                        <div className="bg-white/60 backdrop-blur-lg border border-white/30 p-8 md:p-12 rounded-2xl shadow-2xl">
                             <h2 className="text-3xl font-bold mb-8">
                                <GradientText>Send Us a Message</GradientText>
                             </h2>
                             <form className="space-y-6">
                                <div>
                                    <label htmlFor="contact-name" className="text-sm font-semibold text-gray-700 mb-1 block">Full Name</label>
                                    <input type="text" id="contact-name" placeholder="Your Name" className="block w-full p-3 border border-gray-300 rounded-lg transition focus:ring-2 focus:ring-secondary"/>
                                </div>
                                 <div>
                                    <label htmlFor="contact-email" className="text-sm font-semibold text-gray-700 mb-1 block">Email</label>
                                    <input type="email" id="contact-email" placeholder="Your Email" className="block w-full p-3 border border-gray-300 rounded-lg transition focus:ring-2 focus:ring-secondary"/>
                                </div>
                                 <div>
                                    <label htmlFor="contact-message" className="text-sm font-semibold text-gray-700 mb-1 block">Message</label>
                                    <textarea id="contact-message" rows="5" placeholder="How can we help?" className="block w-full p-3 border border-gray-300 rounded-lg transition focus:ring-2 focus:ring-secondary"></textarea>
                                </div>
                                <button type="submit" className="bg-gradient-to-r from-[#f72585] to-[#7367f0] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl hover:shadow-[#7367f0]/50 transition-all transform hover:scale-105 duration-300 inline-block">
                                    Send Message
                                </button>
                             </form>
                        </div>
                        
                        {/* Right Side: Map and Info */}
                        <div className="space-y-8">
                            <div className="bg-white/60 backdrop-blur-lg border border-white/30 p-8 rounded-2xl shadow-2xl space-y-6">
                                <div className="flex items-start gap-5">
                                    <div className="bg-gradient-to-br from-accent to-secondary text-black p-4 rounded-full shadow-lg">
                                        <LuMapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Our Address</h3>
                                        <p className="text-gray-600 mt-1">123 Event Lane, Celebration City, 12345</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                     <div className="bg-gradient-to-br from-accent to-secondary text-black p-4 rounded-full shadow-lg">
                                        <LuPhone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Call Us</h3>
                                        <p className="text-gray-600 mt-1">(123) 456-7890</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="rounded-2xl shadow-2xl overflow-hidden h-80">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.3375034662!2d-74.25986548248684!3d40.69714941932641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1672922159422!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;