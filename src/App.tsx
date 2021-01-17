import React from "react";
import { Home } from "./pages/Home";
import { NavLayout } from "./components/Nav";
import Media from "./Media";

const App = () => (
  <NavLayout>
    <Home />
  </NavLayout>
);

export default App;
