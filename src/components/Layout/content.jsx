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
        return (
          <Box
            key={job.jdUid}
            sx={{
              flexBasis: `33.3333%`,
              flexGrow: 0,
              maxWidth: `33.3333%`,
              "@media (max-width: 900px)": {
                flexBasis: `50%`,
                maxWidth: `50%`,
              },
            }}
          >
            <Card job={job} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Content;
