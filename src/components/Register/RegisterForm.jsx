import React, {useState} from 'react';
import showPasswordIcon from "../../assets/show_password_icon.svg";

function RegisterForm(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(prevState => !prevState);

    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-lg text-white mb-1">Email</label>
                <input
                    type="email"
                    id="email" placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-yellow-100 text-black placeholder-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div>
                <label htmlFor="username" className="block text-lg text-white mb-1">Логін</label>
                <input
                    type="text"
                    id="username" placeholder="Enter your username"
                    className="w-full px-4 py-2 bg-yellow-100 text-black placeholder-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-lg text-white mb-1">Пароль</label>
                <div className="relative">
                    <input
                        id="password"
                        placeholder="Enter your password"
                        type={isVisible ? "text" : "password"}
                        className="w-full px-4 py-2 bg-yellow-100 text-black placeholder-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-3.5"
                        onClick={toggleVisibility}
                        aria-label={isVisible ? "Hide password" : "Show password"}
                        aria-pressed={isVisible}
                    >
                        <img src={showPasswordIcon} alt="showPasswordIcon" width={"20"} height={"20"}/>
                    </button>
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Логін
            </button>
        </form>
    );
}

export default RegisterForm;