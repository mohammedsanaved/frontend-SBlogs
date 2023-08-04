import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            All About <span className="text-red-500">SBlog</span> Company
          </h1>
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            <strong>SBLOG</strong> is a free to use made with React.js and
            styled with Tailwind CSS
          </p>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
          <img
            className="w-80 md:ml-1 ml-24 shadow-lg"
            alt="iPhone-12"
            src="/images/about.jpg"
          ></img>
        </div>
      </div>
    </>
  );
};

export default About;
