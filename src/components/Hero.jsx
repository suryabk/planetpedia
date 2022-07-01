import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";

const Hero = ({ data }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="w-full md:px-8 md:py-6">
      <Tab.Group as="div" className="relative">
        <Tab.List className="flex md:absolute md:flex-col md:gap-y-4 p-4 bottom-0 right-10 lg:right-40">
          {data.map((section) => (
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full md:w-40 lg:w-60 px-4 py-2 text-sm md:text-lg font-medium font-poppins leading-5 text-costum-gray md:border md:border-gray-500",
                  selected
                    ? "bg-costum-purple text-white"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }>
              {section.tabName}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels as={Fragment}>
          {data.map((item, idx) => (
            <Tab.Panel className="px-8 py-4 w-full flex flex-col lg:flex-row justify-center items-center ">
              <div className="relative flex justify-center items-center lg:w-1/2">
                {item.tabName === "Geology" ? (
                  <>
                    <img
                      className="w-3/4 md:1/4"
                      src={`./assets/planet-${item.name.toLowerCase()}.svg`}
                      alt={`${item.name} planet`}
                    />
                    <img
                      className="w-1/3 md:1/4 absolute -bottom-20"
                      src={item.images}
                      alt={`${item.name} geology`}
                    />
                  </>
                ) : (
                  <img
                    className="w-3/4 md:1/4"
                    src={item.images}
                    alt={item.name}
                  />
                )}
              </div>
              <div className="w-full md:w-1/2 mt-24 lg:mt-0 text-center font-poppins text-white tracking-wider flex flex-col gap-y-4 md:self-start">
                <h1 className="font-antonio text-4xl md:text-6xl">
                  {item.name}
                </h1>
                <p className="text-base text-center font-medium leading-relaxed text-gray-400">
                  {item.desc}
                </p>
                <p className="text-base text-center font-light leading-relaxed text-gray-400">
                  Source:{" "}
                  <span>
                    <a
                      href={item.link}
                      className="font-bold underline text-white">
                      Wikipedia
                    </a>
                  </span>
                </p>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Hero;
