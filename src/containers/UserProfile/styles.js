// Dependencies
import styled from "styled-components";
// Custom
import Icon from "../../components/Icon";

export const Avatar = styled.img`
  border-radius: 100px;
  height: 150px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  border: 1px dashed #FBA87A;
  box-shadow: 0 0 1px #422071;
  right: 0;
  top: 80px;
  width: 150px;
`;

export const Content = styled.div`
  height: calc(100vh - 150px);
  padding-right: 30px;
  padding-top: 100px;
`;

export const Header = styled.div`
  align-items: flex-start;
  background: linear-gradient(to right, #422071 , #FBA87A);
  display: flex;
  font-size: 30px;
  height: 150px;
  padding: 20px 30px;;
`;

export const IconWrapper = styled(Icon)`
  width: 10%;
  path {
    fill: #FBA87A;
  }
`;

export const Li = styled.li`
  display: flex;
  list-style-type: none;
  padding-bottom: 10px;
`;

export const Link = styled.a`
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  color: black;
  &:active {
    text-decoration: none;
    color: #FBA87A;
  }
`;

export const Nickname = styled.span`
  color: #FFF;
  text-align: center;
  width: 80%;
`;

export const Property = styled.div`
 width: 40%;
`;

export const ReposList = styled.div`
  border-radius: 20px;
  border: 1px solid #FBA87A;
  margin-top: 25px;
  padding: 15px;
`;

export const Value = styled.div`
  font-weight: bold;
`;
