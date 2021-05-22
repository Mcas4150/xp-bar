import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default class PageHeader extends Component {
  render() {
    return (
      <HeaderContainer>
        <Title>{this.props.title}</Title>
        <MenuLink to={{ pathname: `/` }}>{"<<"}</MenuLink>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  // display: flex;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: "1fr 1fr 1fr";
  grid-template-areas: "back title blank";
  width: 100%;
  margin: 25px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  text-size: 3rem;
  color: white;
  grid-area: title;
  font-family: retro_computer_personal_use;
  animation: textShadow 7.6s infinite;
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: retro_computer_personal_use;
  animation: textShadow 7.6s infinite;
  grid-area: back;
`;
