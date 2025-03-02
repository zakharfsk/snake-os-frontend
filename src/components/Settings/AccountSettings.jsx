import React from 'react';
import {FiEdit2} from "react-icons/fi";

const AccountSettings = () => {
    return (
        <div className="flex flex-col gap-4 bg-white shadow-lg rounded-xl p-6 w-96">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Account</h2>
                <button
                    className="text-pink-400 hover:text-pink-600 transition-colors bg-pink-600 rounded-xl px-4 py-1 bg-opacity-20">
                    Logout
                </button>
            </div>

            <div className="flex flex-col rounded-full items-center justify-center">
                <img src="http://192.168.0.105/img/default-avatar.9dbd7921.svg" className="w-20 h-20"/>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <div className="flex justify-between">
                        <span className="text-gray-700 font-medium">Name</span>
                        <button
                            className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
                            onClick={() => console.log('edit name')}>
                            <FiEdit2 size={14}/>
                        </button>
                    </div>
                    <input className="text-gray-900 hover:cursor-text" value="holochka" disabled/>
                </div>

                <div>
                    <div className="flex justify-between">
                        <span className="text-gray-700 font-medium">Password</span>
                        <button
                            className="text-gray-500 hover:text-gray-700 transition-colors flex items-center">
                            <FiEdit2 size={14}/>
                        </button>
                    </div>
                    <input className="text-gray-900 hover:cursor-text border-2 border-amber-300" value="********" disabled/>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
