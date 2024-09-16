import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-slate-900 text-white">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} className="text-indigo-600" />
              <FaTwitter size={24} className="text-blue-600" />
              <FaInstagram size={24} className="text-pink-600" />
              <FaLinkedinIn size={24} className="text-blue-600" />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm ">
                &copy; 2024 Deevanshu Gupta. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
