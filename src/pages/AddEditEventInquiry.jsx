import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LuArrowLeft, LuSave, LuDollarSign, LuUser, LuCalendar, LuClipboardList } from 'react-icons/lu';

const AddEditEventInquiry = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);
    const title = isEditing ? 'Edit Event Inquiry' : 'Create New Event Inquiry';

    const FormInput = ({ label, type = "text", placeholder, name, icon }) => (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{icon}</span>
                <input
                    type={type}
                    name={name}
                    id={name}
                    className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
    
    const FormSelect = ({ label, name, options, icon }) => (
         <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <div className="relative">
                 <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{icon}</span>
                <select id={name} name={name} className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm">
                    {options.map(opt => <option key={opt}>{opt}</option>)}
                </select>
            </div>
        </div>
    );

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all">
                    <LuArrowLeft /> Back
                </button>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg">
                <form className="space-y-8">
                    {/* Event Details Section */}
                    <div className="border-b border-gray-700 pb-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Event Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FormSelect label="Customer" name="customer" options={['Select Customer', 'John Doe', 'Jane Smith']} icon={<LuUser />}/>
                            <FormSelect label="Event Type" name="eventType" options={['Select Type', 'Wedding', 'Reception', 'Birthday', 'Corporate']} icon={<LuClipboardList />}/>
                            <FormInput label="Event Date" type="date" name="eventDate" icon={<LuCalendar />} />
                        </div>
                    </div>
                    
                    {/* Financials Section */}
                    <div className="border-b border-gray-700 pb-6">
                        <h2 className="text-xl font-semibold text-white mb-4">Financials</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                             <FormInput label="Agreed Amount" type="number" name="agreedAmount" placeholder="5000" icon={<LuDollarSign />}/>
                             <FormInput label="Discount Amount (Optional)" type="number" name="discount" placeholder="200" icon={<LuDollarSign />}/>
                             <FormInput label="Advance Payment" type="number" name="advance" placeholder="2500" icon={<LuDollarSign />}/>
                             <FormInput label="Balance Amount" type="number" name="balance" placeholder="2300" icon={<LuDollarSign />} />
                         </div>
                    </div>

                    {/* Admin Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Admin Details</h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                             <FormInput label="Receipt Number" name="receiptNumber" placeholder="RCT-1024" icon={<LuClipboardList />}/>
                             <FormSelect label="Event Taken By" name="takenBy" options={['Select Staff', 'Alice', 'Bob']} icon={<LuUser />}/>
                             <FormSelect label="Event Confirmed By" name="confirmedBy" options={['Select Admin', 'Admin', 'Manager']} icon={<LuUser />}/>
                         </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-8">
                         <button type="button" onClick={() => navigate(-1)} className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-500">
                            Cancel
                        </button>
                        <button type="submit" className="flex items-center gap-2 bg-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90">
                            <LuSave /> {isEditing ? 'Save Changes' : 'Create Inquiry'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEditEventInquiry;