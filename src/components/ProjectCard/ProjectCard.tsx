import React from "react";
import { Title, ProjectCardWrapper, CardText, CardLink } from "./styles";

type ProjectCardProps = {
  title: string;
  active: boolean;
  description: string;
  clickFunction: () => void;
  url: string;
  color: string;
};
const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { title, active, description, clickFunction, url, color } = props;

  return (
    <span onClick={() => clickFunction()}>
      <ProjectCardWrapper
        pose={active ? "open" : "closed"}
        className="project-card-wrapper"
        color={color}
      >
        <Title>{title}</Title>
        {active ? (
          <>
            <CardText>{description}</CardText>
            <CardLink target="_blank" href={url}>
              Check it out →
            </CardLink>
          </>
        ) : null}
      </ProjectCardWrapper>
    </span>
  );
};

export default ProjectCard;
