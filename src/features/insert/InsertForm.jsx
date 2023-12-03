import { useForm } from "react-hook-form";
import styled from "styled-components";

import Row from "../../ui/Row";
import Button from "../../ui/Button";
import Required from "../../ui/Required";

import { useSectors } from "./useSectors";
import { useAddUser } from "./useAddUser";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useEditDetails } from "../../context/EditDetailsProvider";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;

const Label = styled.label`
  padding: 0 calc(var(--space-1) + 1px);
  font-size: var(--text-2);
  background-color: var(--color-primary-50);
`;

function InsertForm({ type }) {
  const { handleSubmit, register, reset, formState } = useForm();
  const { errors } = formState;

  const { sectors, isLoadingSectors } = useSectors();
  const { addUser, isAdding } = useAddUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const { user, isLoadingUser } = useUser();

  const { setEditDetails } = useEditDetails();

  function onSubmit(data) {
    if (!data.name || !data.agreeToTerms) return;

    if (type === "save") {
      addUser(data);
    }

    if (type === "edit") {
      const userId = user.users.at(0).id;

      if (
        data.name !== user.users.at(0).name ||
        Number(data.sector) !== user.users.at(0).sector
      ) {
        updateUser({ userId, ...data });
        setEditDetails(false);
      }
    }

    reset();
  }

  return (
    <Row $direction="column" $gap={10}>
      {type === "save" && (
        <p className="text-center">
          Please enter your name and pick the Sectors you are currently involved
          in.
        </p>
      )}

      <Form
        onSubmit={handleSubmit(onSubmit)}
        key={type === "save" || user?.users.at(0).sector}
      >
        <Row $direction="column" $gap={1}>
          <Label htmlFor="name">
            Name<Required>*</Required>
          </Label>
          <input
            className="field"
            type="text"
            id="name"
            defaultValue={type === "save" ? "" : user?.users.at(0).name}
            disabled={isAdding || isLoadingUser || isUpdating}
            {...register("name", { required: "This field is required" })}
          />
          <Required $size={2}>{errors?.name?.message}</Required>
        </Row>

        <Row $direction="column" $gap={1}>
          <Label htmlFor="sector">
            Sectors<Required>*</Required>
          </Label>
          <select
            className="field"
            id="sector"
            defaultValue={
              type === "save" ? sectors?.at(0).value : user?.users.at(0).sector
            }
            disabled={
              isLoadingSectors || isLoadingUser || isAdding || isUpdating
            }
            {...register("sector")}
          >
            {sectors?.map((sector) => (
              <option value={sector?.value} key={sector?.id}>
                {sector?.sector}
              </option>
            ))}
          </select>
        </Row>

        <Row $direction="column" $gap={1} className="last">
          <Row $align="center" $gap={1}>
            <input
              className="checkbox"
              type="checkbox"
              id="agreeToTerms"
              defaultChecked={
                type === "save" ? false : user?.users.at(0).agreeToTerms
              }
              disabled={isAdding || isLoadingUser || isUpdating}
              {...register("agreeToTerms", {
                required: "This field is required",
              })}
            />
            <Label htmlFor="agreeToTerms">
              Agree to terms<Required>*</Required>
            </Label>
          </Row>

          <Required $size={2}>{errors?.agreeToTerms?.message}</Required>
        </Row>

        {type === "save" ? (
          <Button disabled={isAdding}>{isAdding ? "Adding..." : "Save"}</Button>
        ) : (
          <Button disabled={isLoadingUser || isUpdating}>
            {isUpdating ? "Updating..." : "Edit"}
          </Button>
        )}
      </Form>
    </Row>
  );
}

export default InsertForm;
