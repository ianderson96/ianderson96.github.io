import styled from "styled-components";
import { DoubleColumn, Column } from "../../views/styles";
import { primaryColor } from "../../constants/colors";

export const SmallHeaderText = styled.p`
  font-size: 28px;
  color: white;
  line-height: 35px;
  width: 95%;
`;

export const LargeHeaderText = styled.span`
  font-size: 36px;
  color: white;
  line-height: 35px;
  font-weight: bold;
  @media (min-width: 900px) {
    font-size: 64px;
  }
`;

export const NameText = styled(LargeHeaderText)`
  color: ${primaryColor};
  margin-top: 10px;
  background-color: white;
  padding-left: 3%;
  padding-right: 3%;
  height: 45px;
  box-shadow: 0px 18px 35px rgba(0, 0, 0, 0.16);
  align-self: flex-start;
  @media (min-width: 900px) {
    padding-top: 10px;
    height: 55px;
    margin-top: 30px;
  }
`;

export const HeaderLeftWrapper = styled(DoubleColumn)`
  padding-right: 50px;
`;

export const HeaderRightWrapper = styled(Column)`
  display: flex;
  justify-content: center;
`;

export const EmojiImage = styled.img`
  width: 300px;
`;
