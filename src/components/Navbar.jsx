import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export const Navbar = ({ navName }) => {
  const [menu, setMenu] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
        <div className="hidden md:flex uppercase gap-x-8 text-sm tracking-wider font-poppins text-costum-gray/25">
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
        <div className="block md:hidden">
          {menu ? (
            <XIcon className="w-4" onClick={() => setMenu(false)} />
          ) : (
            <MenuIcon className="w-4" onClick={() => setMenu(true)} />
          )}
        </div>
        <div
          className={`${
            menu ? "absolute" : "hidden"
          } overflow-auto w-full left-0 top-14 bg-costum-darkBlue z-10 mx-0 px-4 py-2 border-t-2 border-b-2`}>
          <div className="flex flex-col gap-y-4 overflow-auto">
            {navName.map((planet) =>
              planet === "Earth" ? (
                <NavLink
                  key="Earth"
                  to="/"
                  className={({ isActive }) =>
                    classNames(
                      "w-full uppercase text-lg px-4 py-2 font-bold text-center",
                      isActive
                        ? "bg-costum-purple text-white"
                        : "text-costum-gray/50"
                    )
                  }
                  onClick={() => setMenu(false)}>
                  {planet}
                </NavLink>
              ) : (
                <NavLink
                  key={planet}
                  to={`/${planet.toLowerCase()}`}
                  className={({ isActive }) =>
                    classNames(
                      "w-full uppercase text-lg px-4 py-2 font-bold text-center",
                      isActive
                        ? "bg-costum-purple text-white"
                        : "text-costum-gray/50"
                    )
                  }
                  onClick={() => setMenu(false)}>
                  {planet}
                </NavLink>
              )
            )}
          </div>
        </div>
      </nav>
      <div className="w-full h-[0.5px] bg-costum-gray/20" />
    </>
  );
};
