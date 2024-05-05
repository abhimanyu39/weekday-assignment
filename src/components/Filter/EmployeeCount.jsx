import { useState } from "react";
import Dropdown from "./Dropdown";

const EmployeeCount = () => {
  const employeeCount = ["1-10", "11-20", "21-50", "51-100", "101-200"];
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

  return (
    <Dropdown
      type="No. of employees"
      options={employeeCount}
      selected={selected}
      onChange={handleChange}
    />
  );
};

export default EmployeeCount;
