import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-2xl mt-4">Страница не найдена</p>
            <Link to="/posts" className="mt-6 text-blue-500 text-lg">
                Вернуться на главную
            </Link>
        </div>
    );
};

export default NotFound;