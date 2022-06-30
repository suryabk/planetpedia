import Hero from "./components/Hero";
import data from "./data.json";

import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const earthNav = data.filter((item) => item.name === "Earth");
  const planetNav = data.filter((item) => item.name !== "Earth");
  console.log(planetNav.map((item) => item));

  return (
    <>
      <div className="App">
        <Navbar navName={data.map(({ name }) => name)} />
        <Routes>
          <Route path="/" element={<Hero data={earthNav[0]} />} />
          {planetNav.map((planet) => (
            <Route
              key={planet.name}
              path={`/${planet.name.toLowerCase()}`}
              element={<Hero data={planet} />}
            />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
