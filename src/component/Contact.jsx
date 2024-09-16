import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-slate-900 text-white"
      >
        <h1 className="text-3xl text-indigo-500 font-bold mb-5">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center  mt-5">
          <form
            action="https://getform.io/f/amdpwenb"
            method="POST"
            className="bg-slate-200 w-95 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4 text-black">
              Send Your Message
            </h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 ">FullName</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder=" Enter your full name"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 ">Email Address</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="email"
                type="email"
                placeholder=" Enter your email address"
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 ">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="message"
                type="text"
                placeholder="Type your message here"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
