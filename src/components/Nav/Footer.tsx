import React from "react";
import { Facebook, Instagram, Mail, Twitter } from "react-feather";
import { FooterContainer, FooterLink } from "./Styles";

const footerItems = [
  { title: "About us", link: "#" },
  { title: "Block", link: "#" },
  { title: "Press", link: "#" },
  { title: "iOS App", link: "#" },
  { title: "Andriod App", link: "#" },
];

const socialItems = [
  { component: Facebook, link: "#" },
  { component: Twitter, link: "#" },
  { component: Instagram, link: "#" },
  { component: Mail, link: "#" },
];

export const Footer = () => (
  <FooterContainer>
    <div>
      <div className="flex flex-row justify-around">
        <ul>
          {footerItems.map((item) => (
            <li className="di">
              <FooterLink href={item.link} className="mr3">
                {item.title}
              </FooterLink>
            </li>
          ))}
        </ul>
        <ul>
          {socialItems.map(({ link, component: C }) => (
            <li className="di">
              <FooterLink href={link} className="mr3">
                <C />
              </FooterLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="tc">
      <p>Copyright &copy; 2020 by The Barber Club. All rights reserved.</p>
    </div>
  </FooterContainer>
);
