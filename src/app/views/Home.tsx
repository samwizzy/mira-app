import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-blue-800 min-h-screen sm:py-6 px-4">
      <div className="max-w-7xl mx-auto h-full sm:p-6 py-6">
        <div className="flex justify-center items-center mb-6">
          <div className="">
            <span className="text-gray-100">JavaScript Developer</span>
            <hr className="border-t-2 border-orange-400 my-1" />
            <h2 className="text-6xl font-thin text-gray-100">
              Let me show you around.
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="sm:flex block sm:space-x-8 sm:space-y-0 space-x-0 space-y-4 mt-16">
            <Link
              to="taskone"
              className="block w-60 h-60 p-4 bg-orange-400 shadow-sm hover:bg-orange-500 border-4 border-transparent hover:border-orange-200 cursor-pointer transition-all duration-500 hover:translate-y-4"
            >
              <p className="text-5xl font-thin text-white">Task 1</p>
            </Link>
            <Link
              to="tasktwo"
              className="block w-60 h-60 p-4 bg-orange-400 shadow-sm hover:bg-orange-500 border-4 border-transparent hover:border-orange-200 cursor-pointer transition-all duration-500 hover:translate-y-4"
            >
              <p className="text-5xl font-thin text-white">Task 2</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
