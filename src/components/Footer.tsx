import React from "react";

const Footer = () => {
  return (
    <footer className="h-14 w-full border-t-2 border-stone-900/70 shadow-sm flex  items-center px-10">
      <p className="text-sm">&copy; Responsive Dashboard {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
