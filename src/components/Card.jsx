import React from "react";

export const Card = ({ title, desc }) => {
  return (
    <div className="flex md:flex-col md:w-64 justify-between items-center md:items-start uppercase px-2 md:px-6 py-3 border gap-x-8 gap-y-2">
      <h1 className="text-xs text-costum-gray font-poppins font-medium tracking-widest">
        {title}
      </h1>
      <p className="text-2xl md:text-4xl text-white font-antonio">{desc}</p>
    </div>
  );
};
