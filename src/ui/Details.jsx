import Row from "./Row";
import Heading from "./Heading";
import Button from "./Button";
import InsertForm from "../features/insert/InsertForm";

import { useSectors } from "../features/insert/useSectors";
import { useEditDetails } from "../context/EditDetailsProvider";

function Details({ userData }) {
  const { editDetails, setEditDetails } = useEditDetails();

  const { sectors } = useSectors();
  const [user] = userData;

  function handleEdit() {
    setEditDetails((edit) => !edit);
  }

  return (
    <Row $direction="column" $gap={10}>
      <Row $align="center" $justify="space-between" $width={40}>
        <Heading as="h3" style={{ flex: 1 }}>
          Your Information
        </Heading>
        <Button $variation="danger" $size="small" onClick={handleEdit}>
          <span>{editDetails ? "close" : "open"}</span> Edit
        </Button>
      </Row>

      {!editDetails ? (
        <Row $direction="column">
          <p>
            Name: <span className="text-semibold">{user.name}</span>
          </p>
          <p>
            Sector:{" "}
            <span className="text-semibold">
              {sectors?.find((sector) => sector.value === user.sector).sector}
            </span>
          </p>
          <p>
            Agree to terms:{" "}
            <span className="text-semibold">
              {user.agreeToTerms ? "agreed" : "not agreed"}
            </span>
          </p>
        </Row>
      ) : (
        <InsertForm type="edit" />
      )}
    </Row>
  );
}

export default Details;
