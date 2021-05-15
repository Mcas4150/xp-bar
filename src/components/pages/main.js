import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <MainContainer>
        {/* <MainLink to={{ pathname: `/about` }} >About2</MainLink> */}
        <MainLink to={{ pathname: `/about` }}>About</MainLink>
        <MainLink to={{ pathname: `/games` }}>Games</MainLink>
        <MainLink to={{ pathname: `/menu` }}>Menu</MainLink>
        <MainLink to={{ pathname: `/contact` }}>Contact</MainLink>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
  justify-conter: center;
  flex-direction: column;
  align-items: center;
`;

const MainLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: "retro_computer_personal_use";
  font-size: 2rem;

  animation: textShadow 7.6s infinite;
  // font-size: 25px;
  // color:  ;
`;
