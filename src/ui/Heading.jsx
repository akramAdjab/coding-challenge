import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: var(--text-7);
      font-weight: var(--weight-5);
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: var(--text-4);
      font-weight: var(--weight-4);
    `}

  
  text-transform: capitalize;
`;

export default Heading;
