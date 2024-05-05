import { useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/filterSlicer";

const salary = ["10", "20", "50", "100", "200"];

const Salary = () => {
  const dispatch = useDispatch();
  const selectedSalary = useSelector((state) => state.filters.salary);

  const handleChange = (event) => {
    event.stopPropagation();
    const {
      target: { value },
    } = event;

    const action = {
      type: "SALARY",
      payload: value,
    };
    dispatch(updateFilter(action));
  };

  return (
    <Dropdown
      type="No. of employees"
      options={salary}
      selected={selectedSalary}
      onChange={handleChange}
    />
  );
};

export default Salary;
