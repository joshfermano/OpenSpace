import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Footer.jsx
    <footer className="bg-black-soft text-cream py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">
          &copy; {currentYear} OpenSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
