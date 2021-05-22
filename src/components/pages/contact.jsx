import React, { Component } from "react";
import styled from "@emotion/styled";
import PageHeader from "./pageHeader";
import { ContentPage } from "../../utils/shared";

export default class Contact extends Component {
  render() {
    return (
      <ContentPage>
        <PageHeader title="Contact Us"/>
        Contact Page
      </ContentPage>
    );
  }
}

const ContactContainer = styled.div``;
