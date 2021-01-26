import React, { useState } from 'react';
import { Home, CardA } from "./pages/Home";
import { NavLayout } from "./components/Nav";
import Media from "./Media";
import { Card } from 'antd';

// import Menu from "./components/Menu/Menu";

const App = () => (
  <NavLayout>
    {/* <Menu /> */}
    <Home />
    {/* <CardA title={'Yo'} description={'Whats up?'} /> */}
  </ NavLayout>
);

export default App;
