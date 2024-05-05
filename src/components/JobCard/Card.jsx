import { Avatar, Box } from "@mui/material";
import Pill from "./Pill";
import { ApplyButton } from "../Reusables/applyButton";

const Card = ({ job }) => {
  return (
    <Box
      m={1}
      p={2}
      height={514}
      maxWidth={290}
      borderRadius={5}
      boxShadow={`rgba(0, 0, 0, 0.25) 0px 1px 4px 0px`}
    >
      <Pill text="Posted 12 days ago" />
      <Box
        component={"header"}
        my={1}
        display={"flex"}
        alignItems={"center"}
        gap={1}
      >
        <Avatar m={1} alt="Example" src={job.logoUrl}></Avatar>
        <Box>
          <Box
            sx={{
              fontSize: `13px`,
              fontWeight: `600`,
              letterSpacing: `1px`,
              marginBottom: `3px`,
              color: `#8b8b8b`,
            }}
          >
            {job.companyName}
          </Box>
          <Box sx={{ fontSize: `13px`, lineHeight: "1.5" }}>{job.jobRole}</Box>
          <Box mt={1} sx={{ fontSize: `11px`, fontWeight: "500" }}>
            {job.location}
          </Box>
        </Box>
      </Box>
      <Box mb={2} component={"section"}>
        Estimated Salary: {job.salaryCurrencyCode === "USD" ? "$" : ""}
        {`${job.minJdSalary ?? 0}k`} -{" "}
        {job.salaryCurrencyCode === "USD" ? "$" : ""}
        {`${job.maxJdSalary ?? 0}k`}
      </Box>
      <Box sx={{ fontSize: `1rem`, lineHeight: `1.5`, fontWeight: `500` }}>
        About Company:
      </Box>
      <Box component={"strong"}>About us:</Box>
      <Box
        component={"section"}
        sx={{
          fontWeight: `400`,
          whiteSpace: `pre-wrap`,
          height: `200px`,
          overflow: `hidden`,
          maskImage: `linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))`,
        }}
      >
        {job.jobDetailsFromCompany}
      </Box>
      <Box mb={1} display={"flex"} justifyContent={"center"}>
        <a
          href={job.jdLink}
          style={{
            cursor: `pointer`,
            color: `rgb(73, 67, 218)`,
            textDecoration: `none`,
            fontSize: `14px`,
            fontWeight: `400`,
          }}
        >
          View Job
        </a>
      </Box>
      <Box mb={1} component={"section"}>
        <Box
          sx={{
            fontSize: `13px`,
            fontWeight: `600`,
            letterSpacing: `1px`,
            marginBottom: `3px`,
            color: `#8b8b8b`,
          }}
        >
          Minimum Experience
        </Box>
        <Box>
          {job.minExp && job.maxExp
            ? `${job.minExp} - ${job.maxExp} years`
            : job.minExp || job.maxExp
            ? `${job.minExp || job.maxExp} years`
            : "Freshers"}
        </Box>
      </Box>
      <ApplyButton>Easy Apply</ApplyButton>
    </Box>
  );
};

export default Card;
