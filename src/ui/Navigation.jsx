import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Row from "./Row";

const StyledNavigation = styled.nav`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <Row>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/details">Details</NavLink>
      </Row>
    </StyledNavigation>
  );
}

export default Navigation;
