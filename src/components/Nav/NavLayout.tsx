import React from "react";
import { NavLarge } from "./NavLarge";
import { Footer } from "./Footer";
import { NavSmall } from "./NavSmall";

export const NavLayout: React.FC = ({ children }) => (
  <div className="mh4 mt4 flex flex-row-l justify-around">
    <div>
      <NavLarge />
      <NavSmall />
      {children}
      <Footer />
    </div>
  </div>
);
