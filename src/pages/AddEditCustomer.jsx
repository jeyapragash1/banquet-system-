import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// <-- CORRECTED: The correct name is LuHouse
import { LuArrowLeft, LuSave, LuUser, LuPhone, LuHouse, LuUsers } from 'react-icons/lu';

const AddEditCustomer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);
    const title = isEditing ? 'Edit Customer Profile' : 'Add New Customer';

    // A reusable input component for this form
    const FormInput = ({ label, name, placeholder, icon }) => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{icon}</span>
                <input
                    type="text"
                    name={name}
                    id={name}
                    className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
    
    return (
        <div>
             <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all">
                    <LuArrowLeft /> Back to Customers
                </button>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput label="Full Name" name="name" placeholder="John Doe" icon={<LuUser />} />
                        <FormInput label="Contact Number" name="contact" placeholder="555-0101" icon={<LuPhone />} />
                        <FormInput label="Alternate Contact" name="altContact" placeholder="555-0102" icon={<LuPhone />} />
                        {/* <-- CORRECTED: The correct name is LuHouse */}
                        <FormInput label="Address" name="address" placeholder="123 Main St, Anytown" icon={<LuHouse />} />
                        <FormInput label="No. of Pax / Sawan" name="pax" placeholder="150" icon={<LuUsers />} />
                        <FormInput label="Religion / Community" name="community" placeholder="Christian" icon={<LuUsers />} />
                    </div>
                     <div className="flex justify-end gap-4 pt-4">
                         <button type="button" onClick={() => navigate(-1)} className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-500">
                            Cancel
                        </button>
                        <button type="submit" className="flex items-center gap-2 bg-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90">
                            <LuSave /> {isEditing ? 'Save Changes' : 'Add Customer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditCustomer;