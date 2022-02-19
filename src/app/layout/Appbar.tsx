import React from "react";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto sm:px-6 py-2 px-4">
        <div className="w-full flex justify-between items-center">
          <div className="logo text-blue-700 uppercase text-2xl font-bold h-fit">
            Mira <sup className="text-gray-600 text-xs">test</sup>
          </div>

          <nav>
            <ul className="flex">
              <li>
                <Link
                  className="ml-0 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm uppercase text-sm font-medium text-blue-700 hover:text-white bg-white hover:bg-blue-700"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm uppercase text-sm font-medium text-blue-700 hover:text-white bg-white hover:bg-blue-700"
                  to="taskone"
                >
                  Task one
                </Link>
              </li>
              <li>
                <Link
                  className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm uppercase text-sm font-medium text-blue-700 hover:text-white bg-white hover:bg-blue-700"
                  to="tasktwo"
                >
                  Task two
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Appbar;
