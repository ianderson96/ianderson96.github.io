import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import {
  JobCardWrapper,
  JobTitle,
  CardText,
  CardTextWrapper,
  ShareIcon,
  ShareIconWrapper,
  JobCardLink,
} from "./styles";
import Share from "../../assets/share.png";

type JobCardProps = {
  jobTitle: string;
  position: string;
  timeFrame: string;
  color: string;
  url: string;
};

const JobCard: React.FC<JobCardProps> = (props) => {
  const { jobTitle, position, timeFrame, color, url } = props;
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Fade right cascade>
      <JobCardLink target="_blank" href={url}>
        <JobCardWrapper
          onMouseOver={() => {
            setIsShowing(true);
          }}
          onMouseOut={() => {
            setIsShowing(false);
          }}
        >
          <ShareIconWrapper>
            <ShareIcon show={isShowing} src={Share} />
          </ShareIconWrapper>
          <JobTitle color={color}>{jobTitle}</JobTitle>
          <CardTextWrapper>
            <CardText color={color}>{position}</CardText>
            <CardText color={color}>{timeFrame}</CardText>
          </CardTextWrapper>
        </JobCardWrapper>
      </JobCardLink>
    </Fade>
  );
};

export default JobCard;
