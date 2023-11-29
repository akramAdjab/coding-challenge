import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";
import Heading from "./Heading";
import Row from "./Row";

function AppLayout() {
  return (
    <>
      <Navigation />

      <Row $width={40} $direction="column" $align="center" $gap={11}>
        <Heading as="h1">Test interview</Heading>
        <Outlet />
      </Row>
    </>
  );
}

export default AppLayout;
