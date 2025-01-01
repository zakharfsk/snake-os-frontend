import React, {useEffect, useState} from 'react';
import {GaugeComponent} from "react-gauge-component";

function SystemResourcesLoad(props) {
    const [cpuLoad, setcpuLoad] = useState(0);
    const [ramLoad, setramLoad] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setcpuLoad(Math.floor(Math.random() * 101));
            setramLoad(Math.floor(Math.random() * 101));
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center">
            <GaugeComponent arc={{
                subArcs: [
                    {limit: 20, color: '#5BE12C', showTick: true},
                    {limit: 40, color: '#F5CD19', showTick: true},
                    {limit: 60, color: '#F58B19', showTick: true},
                    {limit: 100, color: '#EA4228', showTick: true},
                ]
            }} value={cpuLoad}/>
            <GaugeComponent arc={{
                subArcs: [
                    {limit: 20, color: '#5BE12C', showTick: true},
                    {limit: 40, color: '#F5CD19', showTick: true},
                    {limit: 60, color: '#F58B19', showTick: true},
                    {limit: 100, color: '#EA4228', showTick: true},
                ]
            }} value={ramLoad}/>
        </div>
    );
}

export default SystemResourcesLoad;