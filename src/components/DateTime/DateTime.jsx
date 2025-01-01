import React, {useEffect, useState} from 'react';

function DateTime(props) {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('uk-UA', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('uk-UA', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };
    return (
        <div className="flex flex-col items-start w-full max-w-sm p-4 bg-gray-800/20 backdrop-blur rounded-lg shadow-md text-white">
            <p className="text-5xl font-bold mb-2">{formatTime(dateTime)}</p>
            <p className="text-lg">{formatDate(dateTime)}</p>
        </div>
    );
}

export default DateTime;