// Dependencies
import styled from "styled-components";
// Custom
import Icon from "../Icon";

export const Avatar = styled.img`
  border-radius: 100px;
  box-shadow: 1px 2px 5px #a4afb6;
  height: 80px;
  width: 80px;
`;

export const Container = styled.div`
  align-items: center;
  background-color: #fcfcfe;
  border: 2px solid #f1f1f1;
  box-shadow: 0px 0 10px #f1f1f1;
  color: #a4afb6;
  cursor: pointer;
  display: flex;
  height: 100px;
  margin: 10px 0;
  padding: 10px 20px;
  &:active {
    background-color: #e2e2e2;
  }
  &:first-child {
    border-top: 2px solid #f1f1f1;
  }
  &:last-child {
    border-bottom: 2px solid #f1f1f1;
  }
`;

export const IconWrapper = styled(Icon)`
  path {
    fill: #a4afb6;
  }
`;

export const Nickname = styled.p`
  font-size: 20px;
  padding: 0 30px;
  width: 80%;
`;
