import styled from "styled-components";
import { primaryColor } from "../constants/colors";

export const ComponentWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
  @media (min-width: 0px) { 
    padding-left: 30px
    padding-right: 30px;
   }

  @media (min-width: 768px) { 
    padding-left: 50px
    padding-right: 50px;
   }

  @media (min-width: 992px) { 
    padding-left: 150px
    padding-right: 150px;
   }

  @media (min-width: 1200px) { 
    padding-left: 250px
    padding-right: 250px;
   }
  font-family: 'Oxygen', sans-serif;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${(props) => props.color || primaryColor};
`;

export const Row = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.span`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  @media (min-width: 900px) {
    flex: 1;
  }
`;

export const DoubleColumn = styled.span`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  @media (min-width: 900px) {
    flex: 2;
  }
`;

export const ResumeLinkWrapper = styled.div`
   position: fixed;
   right: 0px;
   top: 0px
   padding: 20px 20px 20px 20px;
   background-color: ${primaryColor};
`;

export const ResumeLink = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 600px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
