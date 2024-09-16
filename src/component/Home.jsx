import React from "react";
import pic from "../../public/myimg.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mt-16 mx-auto px-4 md:px-20 my-20  bg-slate-900 text-white "
      >
        <div class className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my Portfolio </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-purple-700 font-bold"
                strings={[
                  " Web Developer",
                  "Programmer",
                  "Coder",
                  "Full Stack Developer",
                ]}
                typeSpeed={50}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className=" md:text-md text-justify">
              I pride myself on my ability to quickly adapt to new technologies
              and methodologies, ensuring that I stay ahead in a constantly
              evolving field. My approach to development is both analytical and
              creative—striving for technical excellence while keeping user
              needs at the forefront of every project.
              <br /> I am enthusiastic about collaborating with diverse teams,
              tackling challenging problems, and continuously learning to
              enhance my skill set. If you’re interested in discussing potential
              projects or opportunities, feel free to connect with me!
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2 ">
                <h1 className="font-semi-bold ml-6 md:ml-0"> Available on</h1>
                <ul className="flex space-x-5 ">
                  <li>
                    <a
                      href="https://github.com/Deevanshugupta"
                      target="_blank"
                      className="text-600 hover:text-300 "
                    >
                      <FaGithub className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/deevanshu-gupta-972757252"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      <FaLinkedinIn className="text-2xl cursor-pointer  " />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/deevanshu_1204?igsh=MWRqZWF3ZDF0aGEzZw=="
                      target="_blank"
                      className="text-pink-600 hover:text-pink-500"
                    >
                      <FaInstagram className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://t.me/DG0112"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      <FaTelegramPlane className="text-2xl cursor-pointer " />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-semi-bold">Currently Working on</h1>
                <ul className="flex space-x-5 ml-2 md:ml-0">
                  <li>
                    <SiMongodb className="text-2xl text-fuchsia-600  hover:scale-110 duration-200 rounded-full border-[2px] border-fuchsia-500 glow" />
                  </li>
                  <li>
                    <SiExpress className="text-2xl text-fuchsia-600 hover:scale-110 duration-200 rounded-full border-[2px] border-fuchsia-500 glow" />
                  </li>
                  <li>
                    <SiReact className="text-2xl text-fuchsia-600 hover:scale-110 duration-200 rounded-full border-[2px] border-fuchsia-500 glow" />
                  </li>
                  <li>
                    <FaNodeJs className="text-2xl text-fuchsia-600 hover:scale-110 duration-200 rounded-full border-[2px] border-fuchsia-500 glow" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" md:ml-48  md:mt-24 mt-8 order-1 ">
            <img
              src={pic}
              className="rounded-full  border-[3px] border-fuchsia-500  md:mt-4   w-[350px] h-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
