import styled from "styled-components";
import { Column } from "../../views/styles";

export const HeaderText = styled.h2`
  font-size: 36px;
  color: white;
  line-height: 42px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const HeaderColumn = styled(Column)`
  @media (min-width: 900px) {
    order: 1;
    padding-left: 80px;
    padding-top: 100px;
  }
`;
