import React, { Component } from 'react'
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default class PageHeader extends Component {
  render() {
    return (
      <div>
        <MenuLink to={{ pathname: `/` }}>Main</MenuLink>
      </div>
    )
  }
}

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: retro_computer_personal_use;
  animation: textShadow 7.6s infinite;
`
