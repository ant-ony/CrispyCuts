import React, { useState } from "react";
import { Menu, X } from "react-feather";
import navItems from "./navItems";
import { MenuContainer, NavLinkSmall } from "./Styles";

export const NavSmall = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="dn-l">
      {showMenu && (
        <MenuContainer className="flex flex-row justify-between">
          <div>
            {navItems.map((i) => (
              <p className="mb4">
                <NavLinkSmall href={i.link}>{i.title}</NavLinkSmall>
              </p>
            ))}
          </div>
          <X size={35} color="white" onClick={() => setShowMenu(false)} />
        </MenuContainer>
      )}
      {!showMenu && (
        <div>
          <Menu
            size={35}
            color="white"
            onClick={() => setShowMenu(true)}
            style={{ position: "absolute", right: 30, top: 20 }}
          />
        </div>
      )}
    </div>
  );
};
