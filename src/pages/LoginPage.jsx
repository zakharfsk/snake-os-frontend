import React from 'react';
import bgImage from '../assets/bg_image.jpg';
import Avatar from '../assets/login_avatar.svg';
import LoginForm from "../components/Login/LoginForm";

function LoginPage(props) {
    return (
        <div className={`flex min-h-screen items-center justify-center bg-cover`} style={{backgroundImage: `url(${bgImage})`}}>
            <div className={`rounded-lg shadow-2xl p-8 w-full max-w-sm md:max-w-md bg-black/20 backdrop-blur`}>
                <div className="flex flex-col items-center mb-6">
                    <img src={Avatar} alt="Avatar" className="w-20 h-20"/>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;