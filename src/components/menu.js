import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <MenuContainer>
        {/* <MenuLink to={{ pathname: `/about` }} >About2</MenuLink> */}
        <MenuLink>About</MenuLink>
        <MenuLink>Games</MenuLink>
        <MenuLink>Menu</MenuLink>
        <MenuLink>Contact</MenuLink>
      </MenuContainer>
    );
  }
}

const MenuContainer = styled.div`
  display: flex;
  justify-conter: center;
  flex-direction: column;
  align-items: center;
`;

const MenuLink = styled.div`
  color: white;
  text-decoration: none;
  font-family: Verdana;
  font-size: 2rem;

  animation: textShadow 7.6s infinite;
  // font-size: 25px;
  // color:  ;
`;
