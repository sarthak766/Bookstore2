// HeroPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2488.jpg?t=st=1708797488~exp=1708801088~hmac=f6c19a802b8d60f8eba7bac43f6525f46e8b448596577069ce34b95e8eca2ff3&w=1060')`, // Add your background image URL here
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Bookstore</h1>
          <p className="text-lg text-gray-300 mb-8">Add your book favourite book here</p>
          <div>
            <Link
              to="/register"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-600"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
