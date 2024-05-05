import { useState } from "react";
import Dropdown from "./Dropdown";

const Role = () => {
  const role = ["Frontend", "Backend"];
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    event.stopPropagation();
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  console.log(role);
  return (
    <Dropdown type="Role" options={role} selected={selected} onChange={handleChange} />
  );
};

export default Role;
