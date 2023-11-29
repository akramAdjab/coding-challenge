import styled, { css } from "styled-components";

const Required = styled.span`
  color: var(--color-secondary-600);

  ${(props) =>
    props.$size &&
    css`
      font-size: var(--text-${props.$size});
    `}
`;

export default Required;
