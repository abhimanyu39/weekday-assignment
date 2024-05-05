import { Box } from "@mui/material";
import Card from "../JobCard/Card";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { debounce } from "../../utils";

const Content = ({ requestBody, setRequestBody, getJobs }) => {
  const jobList = useSelector((state) => state.jobs?.jobList);
  const contentRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    console.log(jobList);
  }, [jobList]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        console.log("inter", requestBody);
        const body = {
          limit: requestBody?.limit + 10,
          offset: requestBody?.offset + 10,
        };
        console.log(body);
        setRequestBody(body);
        debounce(getJobs(body), 1000);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef]);

  return (
    <Box
      m={2}
      p={1}
      component={"main"}
      height={`calc(100% - 170px)`}
      overflow={"auto"} // Changed to 'auto' for automatic scrollbar management
    >
      <Box display={"flex"} flexWrap={"wrap"} ref={contentRef}>
        {jobList?.map((job) => (
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
        ))}
        <div ref={loaderRef}>Loading</div>
      </Box>
    </Box>
  );
};

export default Content;
