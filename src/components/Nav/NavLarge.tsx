import React from "react";
import Media from "../../Media";
import navItems from "./navItems";
import { NavLink } from "./Styles";
import styled from "styled-components";

export const NavLarge = () => {
  return (
    <NavWrapper className="dn flex-l">
      <div className="flex flex-row items-center justify-between">
        <div style={{ position: "relative" }} className="mr3">
          <img
            src={Media.Images.LogoWhite}
            alt="The Barber Club logo"
            className="logo"
            width={100}
            height={100}
          />
          {/*
          <img
            src={Media.Images.Logo}
            alt="The Barber Club logo"
            className="logo-black"
            width={100}
            height={100}
            style={{ position: "absolute", left: 90 }}
          />*/}
        </div>
        <nav className="align-center">
          {navItems.map((i) => (
            <NavLink href={i.link} className="ttu mr4">
              {i.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </NavWrapper>
  );
};

export const NavWrapper = styled.div`
  flex-flow: column;
  justify-content: space-between;
  overflow-y: auto;
`;
