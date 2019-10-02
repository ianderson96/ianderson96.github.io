import styled from "styled-components";
import { primaryColor } from "../../constants/colors";
import { ComponentWrapper } from "../../views/styles";

export const ContactWrapper = styled(ComponentWrapper)`
  background-color: white;
`;

export const ContactCardWrapper = styled.div`
  margin-top: 15px;
  background-color: white;
  box-shadow: 0px 18px 35px rgba(0, 0, 0, 0.16);
  width: 100%;
`;

export const ContactTextWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;

  @media (min-width: 1200px) { 
    padding-top: 100px;
   }
`;

export const ContactText = styled.h3`
  font-size: 36px;
  color: ${primaryColor};
  line-height: 80px;
  font-weight: bold;
  margin: 0px;
  padding: 0px;
`;

export const PhotoImage = styled.img`
  object-fit: scale-down;
  height: 100%;
  width: 100%;
`;
