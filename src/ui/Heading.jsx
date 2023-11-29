import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: var(--text-7);
    `}

  font-weight: var(--weight-5);
  text-transform: capitalize;
`;

export default Heading;
