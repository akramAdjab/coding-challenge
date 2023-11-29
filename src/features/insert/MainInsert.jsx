import Row from "../../ui/Row";

function MainInsert({ children }) {
  return (
    <Row $direction="column" $gap={10}>
      <p className="text-center">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </p>

      {children}
    </Row>
  );
}

export default MainInsert;
