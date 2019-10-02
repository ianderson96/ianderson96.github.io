import React from "react";
import {
  JobsWrapper,
  HeaderText,
  HeaderWrapper,
  JobCardsWrapper
} from "./styles";
import {
  ComponentWrapper,
  Row,
  Column,
  DoubleColumn
} from "../../views/styles";
import JobCard from "../JobCard/JobCard";
import Rotate from 'react-reveal/Rotate';

const scoutColor = "#00A1B6";
const cogoColor = "#69B343";
const rpColor = "#EC403B";
const edXColor = "#00A0E3";

const Jobs: React.FC = () => {
  return (
    <JobsWrapper>
      <ComponentWrapper>
        <Row>
          <Column>
            <Rotate top left>
              <HeaderText>these are the great places I've worked</HeaderText>
            </Rotate>
          </Column>
          <DoubleColumn>
            <JobCard
              jobTitle="scout studio 🖌"
              position="studio member → tech director"
              timeFrame="spring 2018 - present"
              color={scoutColor}
              url={'https://web.northeastern.edu/scout/'}
            />
            <JobCard
              jobTitle="cogo labs 🚀"
              position="web engineering intern"
              timeFrame="summer 2019"
              color={cogoColor}
              url={'https://cogolabs.com'}
            />
            <JobCard
              jobTitle="rightpoint 👉"
              position="developer co-op"
              timeFrame="summer & fall 2018"
              color={rpColor}
              url={'https://rightpoint.com'}
            />
            <JobCard
              jobTitle="edX 🎓"
              position="UX co-op"
              timeFrame="summer & fall 2017"
              color={edXColor}
              url={'https://edx.org'}
            />
          </DoubleColumn>
        </Row>
      </ComponentWrapper>
    </JobsWrapper>
  );
};

export default Jobs;
