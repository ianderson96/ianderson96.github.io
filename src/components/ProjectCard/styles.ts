import posed from "react-pose";
import styled from "styled-components";

const projectCardProps = {
  open: {
    color: "#FFFFFF",
    background: ({ color }) => color,
    paddingBottom: 50,
  },
  closed: {
    color: ({ color }) => color,
    background: "#FFFFFF",
    paddingBottom: 15,
  },
};

export const ProjectCardWrapper = styled(posed.div(projectCardProps))`
  margin-top: 15px;
  padding-top: 15px;
  padding-left: 50px;
  box-shadow: 0px 18px 35px rgba(0, 0, 0, 0.16);
  &:hover {
    cursor: ${(props) => (props.pose === "open" ? "default" : "pointer")};
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 35px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
`;

export const CardText = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 0px;
  margin: 0px;
  padding:0px
  padding-top: 50px;
  padding-right: 100px;
`;

export const CardLink = styled.a`
  margin-top: 20px;
  display: block;
  font-size: 24px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer !important;
  }
`;
