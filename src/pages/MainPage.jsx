import React from 'react';
import bgImage from '../assets/bg_image.jpg';
import RegisterPage from "./RegisterPage";
import DateTime from "../components/DateTime/DateTime";
import SystemStatus from "../components/SystemStatus/SystemStatus";
import Header from "../components/Header/Header";

function MainPage(props) {
    if (false) {
        return <RegisterPage/>
    } else {
        return (
            <div style={{backgroundImage: `url(${bgImage})`}} className={`min-h-screen flex flex-col bg-cover`}>
                <Header/>
                <main className="flex-1 flex flex-row items-center pt-10 px-6">
                    <div className="flex flex-1 flex-col items-center gap-4">
                        <DateTime/>
                        <SystemStatus/>
                    </div>
                    <div className="flex flex-1 flex-col items-center gap-4"></div>
                </main>
            </div>
        );
    }
}

export default MainPage;