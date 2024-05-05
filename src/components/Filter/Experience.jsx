import { useState } from "react";
import Dropdown from "./Dropdown";

const Experience = () => {
  const experience = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
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
      type="Experience"
      options={experience}
      selected={selected}
      onChange={handleChange}
    />
  );
};

export default Experience;
