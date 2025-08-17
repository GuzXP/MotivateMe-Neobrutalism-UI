import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 text-center text-gray-600">
      <p>&copy; {currentYear} MotivateMe Planner. Keep pushing forward!</p>
    </footer>
  );
};

export default Footer;