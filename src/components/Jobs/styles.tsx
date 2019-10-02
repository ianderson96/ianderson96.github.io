import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const JobsWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: white;
`;

export const HeaderText = styled.h2`
  font-size: 36px;
  color: ${primaryColor};
  line-height: 42px;
  font-weight: bold;
  margin-bottom: 50px;
  padding-right: 80px;

  @media (min-width: 900px) { 
    padding-top: 100px;
   }
`;

export const HeaderWrapper = styled.span`
`;

export const JobCardsWrapper = styled.span`
`;