import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <MenuContainer>
        {/* <MenuLink to={{ pathname: `/about` }} >About2</MenuLink> */}
        <MenuLink to={{ pathname: `/about` }}>About</MenuLink>
        <MenuLink to={{ pathname: `/about` }}>Games</MenuLink>
        <MenuLink to={{ pathname: `/about` }}>Menu</MenuLink>
        <MenuLink to={{ pathname: `/about` }}>Contact</MenuLink>
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

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "retro_computer_personal_use";
  font-size: 2rem;

  animation: textShadow 7.6s infinite;
  // font-size: 25px;
  // color:  ;
`;
