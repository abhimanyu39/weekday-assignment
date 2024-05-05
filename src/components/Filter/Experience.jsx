import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/filterSlicer";

const experience = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Experience = () => {
  const dispatch = useDispatch();
  const selectedExperience = useSelector((state) => state.filters?.experience);

  const handleChange = (event) => {
    event.stopPropagation();
    const {
      target: { value },
    } = event;

    const action = {
      type: "EXPERIENCE",
      payload: value,
    };
    dispatch(updateFilter(action));
  };
  useEffect(() => {
    console.log(selectedExperience);
  }, [selectedExperience]);
  return (
    <Dropdown
      type="Experience"
      options={experience}
      selected={selectedExperience}
      onChange={handleChange}
    />
  );
};

export default Experience;
