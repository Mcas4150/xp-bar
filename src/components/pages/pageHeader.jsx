import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default class PageHeader extends Component {
  render() {
    return (
      <HeaderContainer>
        <Title>{this.props.title}</Title>
        <MenuLink to={{ pathname: `/` }}>{"<-MAIN"}</MenuLink>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  color: white;

  font-family: retro_computer_personal_use;
  animation: textShadow 7.6s infinite;
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: retro_computer_personal_use;
  animation: textShadow 7.6s infinite;
`;
