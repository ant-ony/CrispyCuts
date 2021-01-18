import React from "react";
import styled from "styled-components";
import { colors } from "../../global";

export const NavLink = styled.a`
  border: none;
  background: none;
  font-size: 18px;
  padding: 0px;
  text-decoration: none;
  color: white;
  &:hover {
    border-bottom: 3px solid #e67e22;
    padding-bottom: 10px;
  }
  /* &:not(:hover):after {
    content: " ";
  } */
`;

export const NavLinkSmall = styled.a`
  border: none;
  background: none;
  font-size: 18px;
  padding: 0px;
  text-decoration: none;
  color: white;
  &:hover {
    color: #0178ff;
  }
`;

export const FooterContainer = styled.footer`
  background-color: #333;
  position: fixed;
  /* top, right, bottom, left */
  padding: 20px 50px 20px 50px;
  bottom: 0;
  left: 0;
  right: 0;
  color: #888;
  a {
    color: #888;
  }
`;

export const FooterLink = styled.a`
  border: none;
  background: none;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const MenuContainer = styled.div`
  background-color: #333;
  padding: 20px 30px 40px 30px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;

export const StyledHamburger = styled.button<{ open: boolean }>`
  position: fixed;
  left: ${({ open }) => (open ? "29vw" : "3vw")};
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  @media (max-width: 600px) {
    left: ${({ open }) => (open ? "initial" : "3vw")};
    right: ${({ open }) => (open ? "2vw" : "initial")};
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${({ open }) =>
      open ? colors.pearl : colors.white};

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: ${colors.white};
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 10rem 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 2rem;
  color: ${colors.lightbrownie};
  text-decoration: none;

  :hover {
    color: ${colors.yellowmellow};
  }
`;
