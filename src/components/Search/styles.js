// Dependencies
import styled from "styled-components";
// Custom
import Icon from "../Icon";

export const Container = styled.div`
  align-items: center;
  background-color: #a8d7f7;
  background: #f1f1f1;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const IconWrapper = styled(Icon)`
  path {
    fill: #a4afb6;
  }
`;

export const Input = styled.input`
  border-radius: 20px;
  border: 1px solid #a4afb6;
  font-size: 15px;
  font-style: italic;
  height: 60%;
  padding-left: 20px;
  width: 80%;
  &::-webkit-input-placeholder {
    color: #4b494a;
    opacity: 0.8;
  }
  &:focus {
    background-color: #f9fafb;
    color: #4b494a;
    outline: none;
  }
`;
