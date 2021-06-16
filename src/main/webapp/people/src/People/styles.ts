import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 0 5px;
  margin: 10px 0;
`;

export const StyledLink = styled(Link)`
  font-family: Arial;
  text-decoration: none;
  color: #000;
  &:hover {
    color: red;
  }
`;
