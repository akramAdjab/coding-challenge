import { useForm } from "react-hook-form";
import styled from "styled-components";

import Row from "../../ui/Row";
import Button from "../../ui/Button";
import Required from "../../ui/Required";

import { useSectors } from "./useSectors";
import { useAddUser } from "./useAddUser";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

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
  const { userAdded, addUser, isAdding } = useAddUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const { user, isLoadingUser } = useUser();

  function onSubmit(data) {
    if (!data.name || !data.agreeToTerms) return;

    if (type === "save") {
      addUser(data);
    }

    if (type === "edit") {
      const userId = user.users.at(0).id;

      (data.name !== user.users.at(0).name ||
        data.sector !== user.users.at(0).sector) &&
        updateUser({ userId, ...data });
    }

    reset();
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      key={userAdded?.at(0).sector || user?.users.at(0).sector}
    >
      <Row $direction="column" $gap={1}>
        <Label htmlFor="name">
          Name<Required>*</Required>
        </Label>
        <input
          className="field"
          type="text"
          id="name"
          defaultValue={userAdded?.at(0).name || user?.users.at(0).name || ""}
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
            userAdded?.at(0).sector ||
            user?.users.at(0).sector ||
            sectors?.at(0).value
          }
          disabled={isLoadingSectors || isLoadingUser || isAdding || isUpdating}
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
              userAdded?.at(0).agreeToTerms ||
              user?.users.at(0).agreeToTerms ||
              false
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
  );
}

export default InsertForm;
