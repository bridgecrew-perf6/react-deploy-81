import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-800 drop-shadow-md">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inflex-flex items-center py-7 px-3 mr-4 text-sky-100 hover:text-sky-400 text-4xl font-bold cursive tracking-widest"
          >
            TG
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-sky-200 hover:text-sky-400 text-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-sky-200 hover:text-sky-400 text-lg"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-sky-200 hover:text-sky-400 text-lg"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
