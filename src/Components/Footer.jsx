import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto fixed bottom-0 md:left-40 bg-dark">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Develop by{" "}
        <a
          className="text-gradient font-medium"
          href="https://instagram.com/kurniawanflix"
          target="_blank"
          rel="noreferrer noopener"
        >
          Muhammad David Kurniawan
        </a>{" "}
      </p>
    </footer>
  );
};
export default Footer;
