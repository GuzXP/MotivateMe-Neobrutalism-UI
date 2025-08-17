import React from 'react';

const Header = () => {
  return (
    <header className="mb-8">
      <div className="bg-white p-4 border-4 border-black shadow-[8px_8px_0px_#000000]">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center">
          MotivateMe Planner
        </h1>
        <p className="text-center text-gray-700 mt-1">
          A supportive daily planner to help you stay motivated.
        </p>
      </div>
    </header>
  );
};

export default Header;