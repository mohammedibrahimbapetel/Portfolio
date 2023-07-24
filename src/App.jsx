import React from "react";
import {
  Navbar,
  Home,
  Footer,
  Personalintroduction,
  Projects,
} from "./components/index";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
