import { useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/filterSlicer";

const role = ["Frontend", "Backend", "IOS", "Android", "Tech lead"];

const Role = () => {
  const dispatch = useDispatch();
  const selectedRole = useSelector((state) => state.filters.role);

  const handleChange = (event) => {
    event.stopPropagation();
    const {
      target: { value },
    } = event;

    const action = {
      type: "ROLE",
      payload: value,
    };
    dispatch(updateFilter(action));
  };
  console.log(selectedRole);
  return (
    <Dropdown
      type="Role"
      multiple={true}
      options={role}
      selected={selectedRole}
      onChange={handleChange}
    />
  );
};

export default Role;
