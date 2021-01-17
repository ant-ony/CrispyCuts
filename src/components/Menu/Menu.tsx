import React from 'react';
import { StyledMenu } from './Menu.styled';

const Menu = () => {
  return (
    <StyledMenu>
      <a href="/">
        <span role="img" aria-label="Haircut Wherever">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="How It Works">&#x1f4b8;</span>
        Pricing
        </a>
      <a href="/">
        <span role="img" aria-label="Our Cities">&#x1f4e9;</span>
        Contact
        </a>
      <a href="/">
        <span role="img" aria-label="Sign Up">&#x1f4e9;</span>
        Contact
        </a>
    </StyledMenu>
  )
}
export default Menu;