import React from "react";
import styled from "styled-components";

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
