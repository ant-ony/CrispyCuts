import React from "react";
import { PillButton } from "../components/Buttons";
import "./Home.css";
import Text from "./Styles";

export const Home = () => {
  return (
    <div className="mt6">
      <Text.h1 className="ttu white ttu">
        Say Goodbye to Inconvenience.
        <br />
        And Hello to Your Hair Plan.
      </Text.h1>
      <div className="mt4">
        <PillButton backgroundColor="#e67e22" className="mr3">
          <Text.body>I'm ready</Text.body>
        </PillButton>
        <PillButton backgroundColor="#e67e22" ghost>
          <Text.body>Show me more</Text.body>
        </PillButton>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="mt4">
      <span className="header-title">Company</span>
      <br />
      <span className="header-text">We specialize in something...</span>
    </div>
  );
};

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div>
      <div className="big-div">
        <span className="div-title">{title}</span>
        <br />
        <span>{description}</span>
      </div>
    </div>
  );
};
