import React from "react";
import styled from "styled-components";

const fontFamily = "'Lato', sans-serif;";

const body = styled.p`
  margin: 0;
  font-family: ${fontFamily};
  font-size: 1em;
  line-height: 1.25em;
`;

const h1 = styled<"h1">(body as any).attrs({ as: "h1" })`
  font-size: 3em;
  font-weight: bold;
`;

const h2 = styled<"h1">(body as any).attrs({ as: "h1" })`
  font-size: 2em;
  font-weight: bold;
`;

export default {
  body,
  h1,
  h2,
};
