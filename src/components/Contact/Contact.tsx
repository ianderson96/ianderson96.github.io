import React from "react";
import { ComponentWrapper, Row, Column } from "../../views/styles";
import {
  ContactCardWrapper,
  ContactText,
  LargeContactText,
  ContactLink,
  PhotoImage,
  ArrowImage,
  ContactTextWrapper,
  ContactWrapper,
} from "./styles";
import Photo from "../../assets/photo-ian.jpg";
import Arrow from "../../assets/arrow.png";
import Fade from "react-reveal/Fade";

const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      <Fade bottom>
        <ContactCardWrapper>
          <PhotoImage src={Photo} />
          <ContactTextWrapper>
            <ArrowImage src={Arrow} />
            <LargeContactText>that's me!</LargeContactText>
            <ContactText>
              located in <b>Boston, MA</b>
            </ContactText>
            <ContactText>Most recent Wikipedia rabbit hole:</ContactText>
            <ContactLink
              target="_blank"
              href="https://en.wikipedia.org/wiki/Roy_Sullivan"
            >
              Man who was struck by lightning seven times
            </ContactLink>
            <ContactText>
              <b>email me:</b> anderson.ia@northeastern.edu
            </ContactText>
          </ContactTextWrapper>
        </ContactCardWrapper>
      </Fade>
    </ContactWrapper>
  );
};

export default Contact;
