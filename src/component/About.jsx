import React from "react";

const About = () => {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-slate-900 text-white"
      >
        <div>
          <h1 className="text-3xl text-indigo-500 font-bold mb-5">About</h1>
          <p className="text-justify">
            As a seasoned IT Engineer and passionate MERN Stack Developer, I
            specialize in crafting seamless and innovative web solutions that
            drive business success. With a strong foundation in both traditional
            IT engineering and modern web development technologies, I bring a
            unique blend of skills and expertise to every project I undertake.
            <br />
            Leveraging the power of MongoDB, Express.js, React, and Node.js, I
            build dynamic and responsive web applications that deliver
            exceptional user experiences. My proficiency in these technologies
            enables me to create full-stack solutions that are both efficient
            and scalable.
            <br />
          </p>
          <br />

          <div className="mt-12 relative before:absolute before:top-0 before:bottom-6 before:left-16 before:rounded-full before:w-1 before:bg-white">
            <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-fuchsia-500 before:to-fuchsia-500  before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
              <p className="text-justify">
                My journey began with a passion for technology and
                problem-solving. Intermediate from Guru Har Rai Academy, Kanpur
                with a focus on mathematics and science set the stage for my
                future endeavors in the IT field.
              </p>
            </div>
            <div className=" mt-12 pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-fuchsia-500 before:to-fuchsia-500  before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
              <p className="text-justify">
                Currently, I am pursuing a B.Tech[2021-25] in Information
                Technology at Babu Banarasi Das Institute of Technology and
                Management, Lucknow. During my academic journey, I developed a
                keen interest in web development. I have been working with
                technologies like HTML, CSS, and JavaScript, and am currently
                delving into the MERN stack (MongoDB, Express.js, React,
                Node.js). This focus has equipped me with skills to build
                dynamic and responsive web applications.
              </p>
            </div>
            <div className="mt-12 pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-fuchsia-500 before:to-fuchsia-500  before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
              <p className="text-justify">
                Throughout my studies, I have actively engaged in various
                academic projects and internships. During my internship, I
                gained hands-on experience in Full Stack Web Development. This
                opportunity allowed me to apply theoretical knowledge to
                real-world problems and collaborate with industry professionals.
              </p>
            </div>
            <div className=" mt-12 pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-fuchsia-500 before:to-fuchsia-500  before:absolute before:rounded-full before:left-[58px]">
              <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
              <p className="text-justify">
                As I approach graduation, I am eager to leverage my skills in IT
                engineering and web development to start my professional career.
              </p>
            </div>
          </div>
          <br />
          <br />

          <div className="flex space-x-2 item-center justify-center">
            <button
              className="neno-button md:text-xl font-bold shadow-xl hover:shadow-fuchsia-800/50 text-white border-2
       hover:bg-fuchsia-800 border-fuchsia-800 rounded-full py-4 px-8 uppercase relative overflow-hidden"
            >
              <a
                href="../../public/My Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
