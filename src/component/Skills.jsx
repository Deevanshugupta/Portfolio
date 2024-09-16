import React from "react";
import java from "../../public/java.png";
import html from "../../public/html.png";
import tailwind from "../../public/tail.png";
import express from "../../public/exxpress.png";
import react from "../../public/atom.png";
import node from "../../public/nodejs.png";
import mongodb from "../../public/mongoDB.png";
import mysql from "../../public/mysql.png";

const Skills = () => {
  const cardItem = [
    {
      id: 1,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: mysql,
      name: "MySQL",
    },
    {
      id: 3,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 4,
      logo: react,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: express,
      name: "Express",
    },
    {
      id: 6,
      logo: tailwind,
      name: "TailwindCSS",
    },
    {
      id: 6,
      logo: html,
      name: "HTML",
    },
    {
      id: 1,
      logo: java,
      name: "JAVA",
    },
  ];
  return (
    <>
      <div
        name="Skills"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 bg-slate-900 my-14 text-white"
      >
        <div>
          <h1 className="text-3xl text-indigo-500 font-bold mb-5">Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 mt-10 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[170px] md:h-[170px]  shadow-md p-1 cursor-pointer hover:scale-110 duration-300 border-fuchsia-500 glow"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[120px] h-[120px]  rounded-full"
                  alt=""
                />
                <div>
                  <div>{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
