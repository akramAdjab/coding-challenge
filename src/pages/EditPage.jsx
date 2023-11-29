import MainInsert from "../features/insert/MainInsert";
import InsertForm from "../features/insert/InsertForm";
import { useUser } from "../features/insert/useUser";
import Required from "../ui/Required";

function EditPage() {
  const { user } = useUser();

  return (
    <MainInsert>
      {user === undefined || user === null ? (
        <Required $size={4} className="text-center">
          No information was found. Please enter your information (in the other
          view) and save it to edit.
        </Required>
      ) : (
        <InsertForm type="edit" />
      )}
    </MainInsert>
  );
}

export default EditPage;
