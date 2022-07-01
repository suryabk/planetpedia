import React from "react";
import { Card } from "../components/Card";
import Hero from "../components/Hero";

const Home = ({ data }) => {
  const statsInfo = ({ rotation, revolution, radius, temperature }) => ({
    "Rotation Time": rotation,
    "Revolution Time": revolution,
    Radius: radius,
    "Average Temp.": temperature,
  });
  const tabInfo = ({ name, overview, structure, geology, images }) => [
    {
      tabName: "Overview",
      name,
      desc: overview.content,
      link: overview.source,
      images: images.planet,
    },
    {
      tabName: "Structure",
      name,
      desc: structure.content,
      link: structure.source,
      images: images.internal,
    },
    {
      tabName: "Geology",
      name,
      desc: geology.content,
      link: geology.source,
      images: images.geology,
    },
  ];

  return (
    <>
      <div>
        <Hero data={tabInfo(data)} />

        <div className="w-full px-2 py-16 sm:px-0 flex flex-col md:flex-row justify-between">
          {Object.keys(statsInfo(data)).map((keys, i) => (
            <Card key={i} title={keys} desc={statsInfo(data)[keys]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
