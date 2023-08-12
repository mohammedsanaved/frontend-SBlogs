import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="max-w-7xl flex flex-col mx-auto px-5 py-24 md:flex-row items-center mb-[70px]">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 md:items-start md:text-left mb-32 items-center text-center">
          <h1 className="mb-1 sm:text-4xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            You can Contact with Us
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            <strong>SBLOG</strong> is a free to use made with React.js and
            styled with Tailwind CSS
          </p>
        </div>
        <form action="">
          <div className="px-4 py-6 rounded text-black w-full">
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Name"
              placeholder="Name"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="textarea"
              className="border border-grey-light w-full p-3 rounded mb-4"
              name="textarea"
              placeholder="Enter your message Content here"
            />

            <button
              type="submit"
              className="w-full text-center py-3 font-medium text-black hover:bg-gray-900 hover:text-white transition duration-500 ease-in-out transform bg-transparent border  bg-gray-900"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
