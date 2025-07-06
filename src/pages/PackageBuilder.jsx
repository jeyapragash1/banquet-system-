import React from 'react';
import PageHeader from '../components/PageHeader';
import { eventPackages } from '../data/dummyData.jsx';
import { LuStar, LuCheck } from 'react-icons/lu';

const PackageBuilder = () => {
    return (
        <div>
            <PageHeader title="Event Package Builder" buttonText="Create New Package" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventPackages.map((pkg, index) => (
                    // <-- DARK MODE: Card background and border changed
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="p-6 bg-secondary text-white">
                            <h3 className="text-xl font-bold">{pkg.name}</h3>
                            {pkg.isPopular && <span className="text-xs bg-warning text-white font-semibold px-2 py-1 rounded-full mt-2 inline-block">Popular</span>}
                        </div>
                        <div className="p-6">
                            {/* <-- DARK MODE: Price text color changed */}
                            <p className="text-4xl font-bold text-white mb-4">{pkg.price.toLocaleString()}</p>
                            {/* <-- DARK MODE: List text color changed */}
                            <ul className="space-y-3 text-gray-300 mb-6">
                                {pkg.services.map((service, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <LuCheck className="text-primary w-5 h-5" />
                                        <span>{service}</span>
                                    </li>

                                ))}
                            </ul>
                            <button className="w-full bg-primary text-white font-semibold py-2 rounded-lg hover:bg-opacity-90">
                                Edit Package
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PackageBuilder;