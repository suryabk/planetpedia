import React from "react";
import { NavLink } from "react-router-dom";
import { Tab } from "@headlessui/react";

import data from "../data.json";

export const Navbar = ({ navName }) => {
  console.log(navName);

  const activeClass = [
    "underline",
    "underline-offset-8",
    "decoration-2",
    "decoration-costum-purple",
    "text-white",
    "font-bold",
  ];

  return (
    <>
      <nav className="w-full px-8 py-4 flex justify-between items-center">
        <div className="logo font-antonio text-2xl uppercase">Planetpedia</div>
        <div className="uppercase flex gap-x-8 text-sm tracking-wider font-poppins text-costum-gray/25">
          {navName.map((planet) =>
            planet === "Earth" ? (
              <NavLink
                key="Earth"
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass.join(" ") : undefined
                }>
                {planet}
              </NavLink>
            ) : (
              <NavLink
                key={planet}
                to={`/${planet.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? activeClass.join(" ") : undefined
                }>
                {planet}
              </NavLink>
            )
          )}
        </div>
      </nav>
      <div className="w-full h-[0.5px] bg-costum-gray/20" />
    </>
  );
};
