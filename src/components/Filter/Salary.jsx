import { useState } from "react";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

const Salary = () => {
  const salary = ["10", "20", "50", "100", "200"];
  const [selected, setSelected] = useState([]);

  const selectedSalary = useSelector((state) => state.filters?.salary);

  const handleChange = (event) => {
    event.stopPropagation();
    const {
      target: { value },
    } = event;
    setSelected(value);
  };

  return (
    <Dropdown
      type="No. of employees"
      options={salary}
      selected={selected}
      onChange={handleChange}
    />
  );
};

export default Salary;
