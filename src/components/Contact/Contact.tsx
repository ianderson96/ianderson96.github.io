import React from "react";
import { ComponentWrapper, Row, Column } from "../../views/styles";
import {
  ContactCardWrapper,
  ContactText,
  PhotoImage,
  ContactTextWrapper,
  ContactWrapper
} from "./styles";
import Photo from "../../assets/photo-ian.jpg";
import Fade from "react-reveal/Fade";

const Contact: React.FC = () => {
  return (
    <ContactWrapper>
      <Fade bottom>
        <ContactCardWrapper>
          <Row>
            <Column>
              <ContactTextWrapper>
                <ContactText>get in touch!</ContactText>
                <ContactText>anderson.ia@husky.neu.edu</ContactText>
              </ContactTextWrapper>
            </Column>
            <Column>
              <PhotoImage src={Photo} />
            </Column>
          </Row>
        </ContactCardWrapper>
      </Fade>
    </ContactWrapper>
  );
};

export default Contact;
