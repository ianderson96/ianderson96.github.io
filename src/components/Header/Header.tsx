import React from "react";
import {
  SmallHeaderText,
  HeaderLeftWrapper,
  HeaderRightWrapper,
  LargeHeaderText,
  NameText,
  EmojiImage
} from "./styles";
import Emoji from "../../assets/emoji-ian.png";
import { ComponentWrapper, Row } from "../../views/styles";
import Zoom from "react-reveal/Zoom";

const Header: React.FC = () => {
  return (
    <ComponentWrapper>
      <Row>
        <HeaderLeftWrapper>
          <SmallHeaderText>
            <strong>hey there!</strong>
          </SmallHeaderText>
          <LargeHeaderText>my name is</LargeHeaderText>
          <NameText>ian anderson</NameText>
          <SmallHeaderText>
            I am a <strong>front-end developer</strong> with a love for{" "}
            <strong>UX</strong> and a focus on <strong>impact</strong>.<br />
            <br /> I want to use technology to{" "}
            <strong>build a better world</strong>.
          </SmallHeaderText>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <Zoom>
            <EmojiImage src={Emoji} />
          </Zoom>
        </HeaderRightWrapper>
      </Row>
    </ComponentWrapper>
  );
};

export default Header;
