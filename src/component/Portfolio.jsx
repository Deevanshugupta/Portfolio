import React from "react";
import ecartsite from "../../public/ecartsite.png";
import weathersite from "../../public/weathersite.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecartsite,
      title: "Mobile Shopping Site",
      demoLink: "https://onlineshoppingsite.netlify.app",
      codeLink: "https://github.com/Deevanshugupta/E-cart.git",
    },
    {
      id: 2,
      src: weathersite,
      title: "Weather Application",
      demoLink: "https://findmyclimate.netlify.app",
      codeLink: "https://github.com/Deevanshugupta/Weather-Info.git",
    },
  ];
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-slate-900 text-white"
      >
        <div>
          <h1 className="text-3xl text-indigo-500 font-bold mb-5">Portfolio</h1>
          <span>Check out some of my projects right here</span>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-7 px-10 sm:px-0">
            {portfolios.map(({ id, src, title, demoLink, codeLink }) => (
              <div key={id} className="shadow-md  shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt={title}
                  className="  rounded-md w-90 h-56 object-cover  duration-200 hover:scale-105"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl  mb-4">{title}</h2>

                  <div className="flex items-center justify-center ">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="  font-bold bg-fuchsia-600 rounded-3xl text-black   border-fuchsia-600 hover:bg-fuchsia-700 mr-10
          py-2 px-5 uppercase "
                      >
                        Demo
                      </button>
                    </a>
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="font-bold bg-fuchsia-600 rounded-3xl text-black   border-fuchsia-600 hover:bg-fuchsia-700
          py-2 px-5 uppercase "
                      >
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

// neno-button w-1/2 px-6 py-3 m-4 hover:text-fuchsia-600 duration-200 cursor-pointer
