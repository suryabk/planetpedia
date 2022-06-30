import React from "react";
import { Card } from "./Card";

const Hero = ({ data }) => {
  const statsInfo = ({ rotation, revolution, radius, temperature }) => ({
    "Rotation Time": rotation,
    "Revolution Time": revolution,
    Radius: radius,
    "Average Temp.": temperature,
  });
  return (
    <div className="w-full px-2 py-16 sm:px-0 flex justify-between">
      {Object.keys(statsInfo(data)).map((keys, i) => (
        <Card key={i} title={keys} desc={statsInfo(data)[keys]} />
      ))}
    </div>
  );
};

export default Hero;
