import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LuArrowLeft, LuSave, LuPackage, LuDollarSign, LuList } from 'react-icons/lu';

const AddEditPackage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);
    const title = isEditing ? 'Edit Event Package' : 'Create New Event Package';
    
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all">
                    <LuArrowLeft /> Back to Packages
                </button>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg">
                 <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                             <label htmlFor="packageName" className="block text-sm font-medium text-gray-300 mb-1">Package Name</label>
                             <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><LuPackage /></span>
                                <input type="text" name="packageName" id="packageName" placeholder="e.g., Gold Wedding Package" className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md" />
                             </div>
                        </div>
                        <div>
                             <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-1">Price</label>
                             <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><LuDollarSign /></span>
                                <input type="number" name="price" id="price" placeholder="8500" className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md" />
                             </div>
                        </div>
                     </div>
                     <div>
                        <label htmlFor="services" className="block text-sm font-medium text-gray-300 mb-1">Services Included (one per line)</label>
                        <div className="relative">
                            <span className="absolute top-3 left-0 flex items-center pl-3 text-gray-400"><LuList /></span>
                            <textarea
                                id="services"
                                name="services"
                                rows={5}
                                className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md"
                                placeholder="Premium Decor
Catering for 150 pax
DJ Services"
                            />
                        </div>
                     </div>
                     <div className="flex justify-end gap-4 pt-4">
                         <button type="button" onClick={() => navigate(-1)} className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-500">
                            Cancel
                        </button>
                        <button type="submit" className="flex items-center gap-2 bg-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90">
                            <LuSave /> {isEditing ? 'Save Package' : 'Create Package'}
                        </button>
                    </div>
                 </form>
            </div>
        </div>
    );
};

export default AddEditPackage;