import React, { useState } from "react";
import pic from "../../public/DG.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Portfolio",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50  bg-slate-900 text-white">
        <div className="flex  justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full mt-1" alt="" />
            <h1 className="font-bold text-2xl text-fuchsia-600 cursor-pointer">
              Deevanshu
              <p className="text-sm text-white font-semibold">IT Engineer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:text-fuchsia-500 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {" "}
              {menu ? (
                <IoCloseSharp size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}{" "}
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        {menu && (
          <div className="bg-slate-900 text-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:text-fuchsia-500 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
