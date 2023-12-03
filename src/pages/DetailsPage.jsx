import MainInsert from "../features/insert/MainInsert";

import Required from "../ui/Required";
import Details from "../ui/Details";

import { useUser } from "../features/insert/useUser";

function DetailsPage() {
  const { user } = useUser();

  return (
    <MainInsert>
      {user === undefined || user === null ? (
        <Required $size={4} className="text-center">
          No information was found. Please enter your information (in the other
          view) and save it to edit.
        </Required>
      ) : (
        <Details userData={user.users} />
      )}
    </MainInsert>
  );
}

export default DetailsPage;
