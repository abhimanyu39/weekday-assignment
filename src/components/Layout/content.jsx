import { Box } from "@mui/material";
import Card from "../JobCard/Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Content = () => {
  const jobList = useSelector((state) => state.jobs?.jobList);

  useEffect(() => {
    console.log(jobList);
  }, [jobList]);

  return (
    <Box m={2} p={1} component={"main"} display={"flex"} flexWrap={"wrap"}>
      {jobList?.map((job) => {
        return <Card key={job.jdUid} job={job} />;
      })}
    </Box>
  );
};

export default Content;
