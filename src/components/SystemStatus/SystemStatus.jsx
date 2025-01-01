import React from 'react';
import ShowDetails from "../../assets/open_details.svg";
import ResourceMenu from "../ResourceMenu/ResourceMenu";
import SystemResourcesLoad from "../SystemResourcesLoad/SystemResourcesLoad";

function SystemStatus(props) {
    return (
        <div
            className="flex flex-col gap-4 items-start w-full max-w-sm p-4 bg-gray-800/20 backdrop-blur rounded-lg shadow-md text-white">
            <div className="flex flex-row items-center justify-between w-full">
                <div className={"font-normal font-['Open_Sans']"}>System Status</div>
                <img src={ShowDetails} alt="ShowDetails"/>
            </div>
            <SystemResourcesLoad/>
            <div className="h-0.5 w-full bg-[#8D9297]"></div>
            <ResourceMenu/>
        </div>
    );
}

export default SystemStatus;