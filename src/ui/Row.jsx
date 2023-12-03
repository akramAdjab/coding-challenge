import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.$direction &&
    css`
      flex-direction: ${props.$direction};
    `}

  ${(props) =>
    props.$align &&
    css`
      align-items: ${props.$align};
    `}

  ${(props) =>
    props.$justify &&
    css`
      justify-content: ${props.$justify};
    `}

  ${(props) =>
    props.$gap &&
    css`
      gap: var(--space-${props.$gap});
    `}

  ${(props) =>
    props.$width &&
    css`
      width: ${props.$width}rem;
      max-width: ${props.$width}rem;
    `}
`;

Row.defaultProps = {
  $direction: "row",
  $align: "stretch",
  $justify: "flex-start",
  $gap: 4,
};

export default Row;
