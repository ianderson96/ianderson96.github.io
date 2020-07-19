import styled from "styled-components";
import { primaryColor } from "../../constants/colors";
import { ComponentWrapper } from "../../views/styles";

export const ContactWrapper = styled(ComponentWrapper)`
  background-color: white;
`;

export const ContactCardWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContactTextWrapper = styled.div`
  flex: 100%;
  text-align: center;
  word-wrap: break-word;
`;

export const ContactText = styled.h3`
  font-size: 30px;
  color: ${primaryColor};
  font-weight: 400;
  margin: 20px 0px 0px 0px;
  padding: 0px;
`;

export const LargeContactText = styled(ContactText)`
  font-size: 40px;
  font-weight: 700;
  margin: 0px;
`;

export const ContactLink = styled.a`
  font-size: 30px;
  color: ${primaryColor};
  font-weight: 700;
  margin: 20px 0px 0px 0px;
  padding: 0px;
`;

export const PhotoImage = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  border: solid 8px ${primaryColor};
`;

export const ArrowImage = styled.img`
  height: 70px;
  margin-top: 20px;
`;
