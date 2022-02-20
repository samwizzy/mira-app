import * as React from "react";
import classNames from "classnames";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function AppLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={classNames(
        "ml-0 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm uppercase text-sm font-medium hover:text-white bg-white hover:bg-blue-700",
        match && "bg-blue-700 text-white"
      )}
    >
      {children}
    </Link>
  );
}

function Appbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto sm:px-6 py-2 px-4">
        <div className="w-full flex justify-between items-center">
          <div className="logo text-blue-700 uppercase text-2xl font-bold h-fit">
            Mira <sup className="text-orange-500 text-xs">test</sup>
          </div>

          <nav>
            <ul className="sm:flex hidden space-x-2">
              <li>
                <AppLink to="/">Home</AppLink>
              </li>
              <li>
                <AppLink to="taskone">Task one</AppLink>
              </li>
              <li>
                <AppLink to="tasktwo">Task two</AppLink>
              </li>
            </ul>

            <MobileMenu className="sm:hidden block" />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Appbar;
