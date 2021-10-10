import React from "react";
import { About, Header, Navbar } from "./components";
import "./sass/index.scss";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
