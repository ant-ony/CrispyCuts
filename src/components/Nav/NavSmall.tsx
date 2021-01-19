import React, { useState, useRef } from "react";
import { Menu, X } from "react-feather";
import navItems from "./navItems";
import { MenuContainer, NavLinkSmall } from "./Styles";
import Hamburger from "./Burger";
import { StyledMenu, StyledLink } from "./Styles";

import { useOnClickOutside } from "../../hooks";

export const NavSmall = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  // return (
  //   <div className="dn-l">
  //     {showMenu && (
  //       <MenuContainer className="flex flex-row justify-between">
  //         <div>
  //           {navItems.map((i) => (
  //             <p className="mb8">
  //               <NavLinkSmall href={i.link}>{i.title}</NavLinkSmall>
  //             </p>
  //           ))}
  //         </div>
  //         <X size={35} color="white" onClick={() => setShowMenu(false)} />
  //       </MenuContainer>
  //     )}
  //     {!showMenu && (
  //       <div>
  //         <Menu
  //           size={35}
  //           color="white"
  //           onClick={() => setShowMenu(true)}
  //           style={{ position: "absolute", right: 30, top: 20 }}
  //         />
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="dn-1" ref={node}>
      <StyledMenu open={open}>
        {navItems.map((i) => (
          <StyledLink href={i.link} onClick={() => close()}>{i.title}</StyledLink>
        ))}
      </StyledMenu>
      <Hamburger open={open} setOpen={setOpen} />
    </div>
  );
};
