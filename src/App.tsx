import React, { useState } from 'react';
import { Home } from "./pages/Home";
import { NavLayout } from "./components/Nav";
import Media from "./Media";

// import Menu from "./components/Menu/Menu";

const App = () => (
  <NavLayout>
    {/* <Menu /> */}
    <Home />
  </ NavLayout>
);

export default App;
