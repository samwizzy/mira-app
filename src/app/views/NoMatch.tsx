import * as React from "react";

function NoMatch() {
  return (
    <div className="bg-gray-100 sm:py-6 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="text-center mt-16">
          <img src="images/404.gif" alt="" className="w-72 mb-6" />
          <h3 className="text-5xl font-light text-blue-700 mb-4">
            Page not found
          </h3>
          <p className="text-gray-600 font-light text-lg">
            This file has been moved or doesn't exist.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
