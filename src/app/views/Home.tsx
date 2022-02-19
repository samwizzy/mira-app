import React from "react";

function Home() {
  return (
    <div>
      <div className="bg-blue-800 h-screen sm:py-6 px-4">
        <div className="max-w-7xl mx-auto h-screen sm:p-6 py-6">
          <div className="flex justify-center items-center mb-6">
            <div className="">
              <hr className="border-t-4 border-orange-400" />
              <span className="text-sm text-gray-200 font-light">
                JavaScript Developer
              </span>
              <h2 className="text-6xl font-light text-gray-200">
                Let me show you around
              </h2>
            </div>
          </div>

          <div className="flex justify-around space-x-6 mt-16">
            <div className="w-60 h-60 p-4 bg-orange-400 shadow-sm hover:bg-orange-500 cursor-pointer">
              <p className="text-5xl font-thin text-white">Task 1</p>
            </div>
            <div className="w-60 h-60 p-4 bg-orange-400 shadow-sm hover:bg-orange-500 cursor-pointer">
              <p className="text-5xl font-thin text-white">Task 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
