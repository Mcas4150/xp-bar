import React, { Component } from "react";
import PageHeader from "./pageHeader";
import { ContentPage } from "../../utils/shared";

export default class About extends Component {
  render() {
    return (
      <ContentPage>
        <PageHeader title="About Us"/>
        <p>
          XP Gaming Bar is a video game themed bar founded by gamers for gamers.
          Here you can enjoy high quality cocktails and comfort food while
          playing the latest video games and board games with your friends
        </p>
        <p>
          Whether it's taking down the covenant on the Xbox Series X, swinging
          through New York as Spiderman on the PS5, racing your friends in Mario
          Cart on the Nintendo Switch, or having a quick duel against your
          friends to show them who's the true king of games is, there is
          something for every gamer at XP Gaming Bar! #LevelUp!
        </p>
      </ContentPage>
    );
  }
}
