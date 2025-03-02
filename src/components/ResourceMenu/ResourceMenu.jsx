import React, {useState} from "react";

const ResourceMenu = () => {
    const [activeTab, setActiveTab] = useState("CPU");

    const cpuData = [
        {name: "crafty-controller", value: "20%"},
        {name: "nginx proxy manager", value: "5%"},
        {name: "portainer", value: "2%"},
    ];

    const ramData = [
        {name: "crafty-controller", value: "3.74 GB"},
        {name: "nginx proxy manager", value: "106.11 MB"},
        {name: "portainer", value: "18.93 MB"},
    ];

    return (
        <div className="w-full max-w-sm text-white rounded-lg ">
            {/* Tabs */}
            <div className="flex mb-4">
                <button
                    onClick={() => setActiveTab("CPU")}
                    className={`flex-1 py-2 text-center ${
                        activeTab === "CPU"
                            ? "text-white border-b-2 border-white"
                            : "text-gray-400"
                    }`}
                >
                    CPU
                </button>
                <button
                    onClick={() => setActiveTab("RAM")}
                    className={`flex-1 py-2 text-center ${
                        activeTab === "RAM"
                            ? "text-white border-b-2 border-whit"
                            : "text-gray-400"
                    }`}
                >
                    RAM
                </button>
            </div>
            {/* Content */}
            <div>
                {activeTab === "CPU" && (
                    <ul>
                        {cpuData.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between py-1 px-4"
                            >
                                <span>{item.name}</span>
                                <span>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {activeTab === "RAM" && (
                    <ul>
                        {ramData.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between py-1 px-4"
                            >
                                <span>{item.name}</span>
                                <span>{item.value}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ResourceMenu;
