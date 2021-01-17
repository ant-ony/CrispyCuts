import React from "react";
import styled from "styled-components";

type PillButtonProps = {
  ghost?: boolean;
  backgroundColor?: string;
};

export const PillButton = styled.button<PillButtonProps>`
  border-radius: 50vmin;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 25px;
  padding-right: 25px;
  border: ${(props) =>
    props.ghost ? `2px solid ${props.backgroundColor ?? "white"}` : "none"};
  outline: none;
  color: ${(props) =>
    props.backgroundColor && props.ghost ? props.backgroundColor : "white"};
  background-color: ${(props) => {
    if (props.ghost) return "transparent";
    return props.backgroundColor ?? "black";
  }};
`;
