import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export interface ShareIconProps {
    show: boolean;
  }

export const JobCardWrapper = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 50px;
  background-color: white;
  box-shadow: 0px 18px 35px rgba(0, 0, 0, 0.16);
`;

export const JobCardLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const JobTitle = styled.h3`
  font-size: 36px;
  color: ${props => props.color || primaryColor};
  line-height: 35px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
`;

export const CardText = styled.p`
  font-size: 18px;
  color: ${props => props.color || primaryColor};
  line-height: 20px;
  margin: 0px;
  padding: 0px;
`;

export const CardTextWrapper = styled.div`
  padding-top: 7px;
`;

export const ShareIcon = styled.img`
    width: 40px;
    opacity: ${(props: ShareIconProps) => props.show ? '1' : `0`};
`;

export const ShareIconWrapper = styled.div`
    width: 100%;
    text-align: right;
    margin-bottom: -35px;
    padding-right: 20px;
    box-sizing: border-box;
`;