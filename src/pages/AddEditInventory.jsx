import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LuArrowLeft, LuSave, LuPackage, LuList, LuHash } from 'react-icons/lu';

const AddEditInventory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = Boolean(id);
    const title = isEditing ? 'Edit Inventory Item' : 'Add New Inventory Item';
    
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-all">
                    <LuArrowLeft /> Back to Inventory
                </button>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg">
                 <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                             <label htmlFor="itemName" className="block text-sm font-medium text-gray-300 mb-1">Item Name</label>
                             <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><LuPackage /></span>
                                <input type="text" name="itemName" id="itemName" placeholder="e.g., Chiavari Chairs (Gold)" className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md" />
                             </div>
                        </div>
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><LuList /></span>
                                <select id="category" name="category" className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md">
                                    <option>Furniture</option>
                                    <option>Crockery</option>
                                    <option>Linens</option>
                                    <option>Decor</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-1">Current Quantity</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400"><LuHash /></span>
                                <input type="number" name="quantity" id="quantity" placeholder="450" className="pl-10 block w-full py-2 px-3 border border-gray-600 bg-gray-700 text-white rounded-md" />
                            </div>
                        </div>
                     </div>
                     <div className="flex justify-end gap-4 pt-4">
                         <button type="button" onClick={() => navigate(-1)} className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-500">
                            Cancel
                        </button>
                        <button type="submit" className="flex items-center gap-2 bg-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90">
                            <LuSave /> {isEditing ? 'Save Item' : 'Add Item'}
                        </button>
                    </div>
                 </form>
            </div>
        </div>
    );
};

export default AddEditInventory;