import MainInsert from "../features/insert/MainInsert";
import InsertForm from "../features/insert/InsertForm";

function Homepage() {
  return (
    <MainInsert>
      <InsertForm type="save" />
    </MainInsert>
  );
}

export default Homepage;
